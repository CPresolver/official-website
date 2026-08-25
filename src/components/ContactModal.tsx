"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const SERVICE_KEYS = [
  "category1",
  "category2",
  "category3",
  "category4",
  "category5",
  "category6",
  "category7",
  "category8",
] as const

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations("CreativeHouse")
  const tContact = useTranslations("Contact")

  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)

  const MAX_FILE_SIZE = 8 * 1024 * 1024 // 8MB — mantém a margem para o limite do Resend

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [projectDetails, setProjectDetails] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Fecha com a tecla Esc e bloqueia o scroll da página enquanto o modal está aberto
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const toggleService = (key: string) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const checklist = [
    t("modal.checklist.item1"),
    t("modal.checklist.item2"),
    t("modal.checklist.item3"),
    t("modal.checklist.item4"),
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage(null)

    const projectTypeLabel = selectedServices
      .map((key) => t(`services.categories.${key}.title`))
      .join(", ")

    if (file && file.size > MAX_FILE_SIZE) {
      setStatus("error")
      setErrorMessage("O ficheiro anexado é demasiado grande (máx. 8MB).")
      return
    }

    try {
      // Usamos FormData (multipart) em vez de JSON porque precisamos de
      // enviar o ficheiro em binário — JSON não suporta isso diretamente.
      const formData = new FormData()
      formData.append("name", fullName)
      formData.append("contact", email)
      formData.append("project_type", projectTypeLabel)
      formData.append("message", projectDetails)
      if (file) formData.append("file", file)

      // Nota: não definimos "Content-Type" manualmente — o browser define
      // automaticamente "multipart/form-data" com o boundary correto.
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || "Erro ao enviar o pedido.")
      }

      setStatus("success")
      setFullName("")
      setEmail("")
      setProjectDetails("")
      setSelectedServices([])
      setFile(null)
      onClose()
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado.")
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-white/20 bg-[#0A0A0A] px-6 py-10 md:px-16 md:py-16">
        {/* Glow de fundo, igual à identidade visual do resto da página */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          aria-label={t("modal.close")}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-10 w-9 h-9 flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300 hover:cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Coluna esquerda */}
          <div className="flex flex-col justify-between">
            <div>
              <h2
                id="project-modal-title"
                className="text-3xl md:text-5xl font-bold mb-8 max-w-md"
              >
                {t("modal.title")}
              </h2>

              <ul className="flex flex-col gap-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white text-black">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 md:mt-0">
              <h3 className="text-lg font-bold mb-3">{t("modal.contactInfoTitle")}</h3>
              <div className="flex flex-col gap-1 text-white/60 text-sm">
                <span>{tContact("info.email")}</span>
                <span>{tContact("info.phone")}</span>
                <span>{tContact("info.address")}</span>
              </div>
            </div>
          </div>

          {/* Coluna direita — formulário */}
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("modal.serviceTitle")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {SERVICE_KEYS.map((key) => {
                  const isSelected = selectedServices.includes(key)
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => toggleService(key)}
                      className={`text-sm px-4 py-3 border text-center transition-all duration-300 hover:cursor-pointer ${isSelected
                        ? "bg-white text-black border-white"
                        : "border-white/20 text-white/80 hover:border-white/40"
                        }`}
                    >
                      {t(`services.categories.${key}.title`)}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <div>
                <label htmlFor="modal-full-name" className="block mb-2">
                  {t("modal.fullName")}
                </label>
                <input
                  id="modal-full-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t("modal.fullNamePlaceholder")}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block mb-2">
                  {t("modal.email")}
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("modal.emailPlaceholder")}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-project-details" className="block mb-2">
                {t("modal.projectDetails")}
              </label>
              <textarea
                id="modal-project-details"
                required
                rows={1}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                placeholder={t("modal.projectDetailsPlaceholder")}
                className="w-full resize-none bg-transparent border-b border-white/30 py-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block mb-3">{t("modal.attach")}</label>
              <label
                htmlFor="modal-file"
                className="flex items-center justify-center text-center px-4 py-10 border border-dashed border-white/30 text-white/50 text-sm cursor-pointer hover:border-white/50 hover:text-white/70 transition-colors duration-300"
              >
                {file?.name ?? t("modal.attachPlaceholder")}
              </label>
              <input
                id="modal-file"
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </div>

            {status === "error" && errorMessage && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <div className="relative w-full isolate group">
              <div className="absolute inset-0 border border-white/30 bg-[#F2EFEF] opacity-50 translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#C4C4C4] hover:bg-white hover:cursor-pointer text-black font-medium py-3 px-4 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "..." : t("modal.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
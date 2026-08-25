import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactNotificationEmail, contactConfirmationEmail } from "@/components/EmailTemplate"

// Email de destino — para onde as mensagens do formulário são enviadas
const TO_EMAIL = "cpresolver@gmail.com"

// Remetente: tem de ser um endereço de um domínio verificado no Resend.
const FROM_EMAIL = "CPresolver Formulário <form@cpresolver.com>"

// Limite do anexo — mantém margem face ao limite de tamanho do Resend
// (e à generalidade dos clientes de email, que começam a rejeitar/cortar
// mensagens muito grandes).
const MAX_ATTACHMENT_SIZE = 8 * 1024 * 1024 // 8MB

export async function POST(request: Request) {
  try {
    // O formulário envia multipart/form-data (não JSON) porque inclui um
    // ficheiro binário opcional.
    const formData = await request.formData()
    const name = (formData.get("name") ?? "").toString().trim()
    const contact = (formData.get("contact") ?? "").toString().trim()
    const project_type = (formData.get("project_type") ?? "").toString().trim()
    const message = (formData.get("message") ?? "").toString().trim()
    const file = formData.get("file")

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Nome e contacto são obrigatórios." },
        { status: 400 }
      )
    }

    // Constrói o anexo para o Resend, se houver ficheiro.
    // `file` só é uma instância de File quando o campo foi mesmo preenchido;
    // caso contrário o FormData devolve null (ou string, se enviado de outra forma).
    let attachments: { filename: string; content: Buffer }[] | undefined
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_ATTACHMENT_SIZE) {
        return NextResponse.json(
          { error: "O ficheiro anexado é demasiado grande (máx. 8MB)." },
          { status: 400 }
        )
      }
      const arrayBuffer = await file.arrayBuffer()
      attachments = [{ filename: file.name, content: Buffer.from(arrayBuffer) }]
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não está definida nas variáveis de ambiente.")
      return NextResponse.json(
        { error: "Configuração de email em falta no servidor." },
        { status: 500 }
      )
    }

    // Só criamos o cliente depois de confirmar que a chave existe.
    // Instanciá-lo ao nível do módulo (fora do handler) fazia o `import`
    // rebentar sempre que a env var não estivesse definida — e isso
    // derrubava a rota inteira em vez de devolver o JSON de erro acima.
    const resend = new Resend(process.env.RESEND_API_KEY)

    const payload = { name, contact, project_type, message }
    const notification = contactNotificationEmail(payload)

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: contact,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
      ...(attachments ? { attachments } : {}),
    })

    if (error) {
      console.error("Erro do Resend:", error)
      return NextResponse.json(
        { error: "Não foi possível enviar o email. Tenta novamente mais tarde." },
        { status: 502 }
      )
    }

    // Email de confirmação para quem submeteu o formulário. É "best effort":
    // se `contact` não for um email válido (ex: só um telefone) ou o envio
    // falhar por outro motivo, não queremos que isso derrube o pedido — a
    // notificação interna já foi enviada com sucesso acima.
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      const confirmation = contactConfirmationEmail(payload)
      const { error: confirmError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [contact],
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      })
      if (confirmError) {
        console.error("Erro do Resend ao enviar confirmação:", confirmError)
      }
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Erro inesperado ao processar o formulário:", err)
    return NextResponse.json(
      { error: "Erro inesperado no servidor." },
      { status: 500 }
    )
  }
}
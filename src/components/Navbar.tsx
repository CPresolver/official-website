"use client"

import Image from "next/image"
import { useState } from "react"
// Import do Link/usePathname com consciência de locale do next-intl, em vez de 'next/link' /
// 'next/navigation'. Isto faz o Link manter o idioma atual ao navegar, e o usePathname devolve
// o caminho SEM o prefixo de locale (ex: "/creative-house" em vez de "/pt/creative-house"),
// o que também resolve a comparação de rota sem precisar de listar cada idioma à mão.
// Ajusta este caminho se o teu ficheiro de navegação do next-intl estiver noutro sítio.
import { Link, usePathname } from "@/i18n/navigation"

const NAV_ITEMS = [
  { label: "Company", href: "/" },
  { label: "Safety", href: "/" },
  { label: "Product", href: "/" },
  { label: "Culture", href: "/" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isCreativeHousePage = pathname === "/creative-house"

  return (
    <nav className="w-full bg-black">
      <div className="flex flex-row items-center justify-between gap-1 md:gap-8 px-6 py-4">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="w-auto h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex flex-row gap-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="list-none">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/*
          Usamos "invisible" em vez de não renderizar o botão: assim o espaço continua
          reservado no layout (o menu não "salta"/encolhe) quando estamos na página
          Creative House, só o conteúdo fica invisível.
        */}
        <div
          className={`hidden md:block ${isCreativeHousePage ? "invisible" : ""}`}
          aria-hidden={isCreativeHousePage}
        >
          <Link
            href="/creative-house"
            tabIndex={isCreativeHousePage ? -1 : undefined}
            className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 w-fit flex flex-row items-center"
          >
            Creative House
            <Image
              src="/images/icons/forks.png"
              width={20}
              height={5}
              alt=""
              className="inline-block ml-8"
            />
          </Link>
        </div>

        {/* Botão hamburger - só mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu mobile (dropdown) */}
      {menuOpen && (
        <ul id="mobile-menu" className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="list-none">
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          {!isCreativeHousePage && (
            <li className="list-none">
              <Link
                href="/creative-house"
                onClick={() => setMenuOpen(false)}
                className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 w-fit inline-block"
              >
                Creative House
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  )
}
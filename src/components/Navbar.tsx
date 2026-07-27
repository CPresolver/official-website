"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full md:w-auto bg-black">
      <div className="flex flex-row items-center justify-between md:justify-start gap-1 md:gap-50 px-6 py-4">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="w-auto h-8 md:h-10"
          />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex flex-row gap-4">
          <li className="list-none">Company</li>
          <li className="list-none">Safety</li>
          <li className="list-none">Product</li>
          <li className="list-none">Culture</li>
        </div>

        <div className="hidden md:block">
          <button className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 w-fit flex flex-row">
            <Link href="/creative-house">
              Creative House
            </Link>

            <Image
              src="/images/icons/forks.png"
              width={15}
              height={5}
              alt="Forks"
              className="inline-block ml-8"
            />
          </button>
        </div>

        {/* Botão hamburger - só mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile (dropdown) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <li className="list-none">Company</li>
          <li className="list-none">Safety</li>
          <li className="list-none">Product</li>
          <li className="list-none">Culture</li>
          <Link href="/creative-house" className="bg-white hover:bg-gray-500 hover:cursor-pointer text-black font-medium py-2 px-4 w-fit">
            Creative House
          </Link>
        </div>
      )}
    </nav>
  )
}
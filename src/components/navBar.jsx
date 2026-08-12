'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-bg/70 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-primary font-light text-base tracking-hero transition-opacity duration-200 hover:opacity-70"
        >
          Damian Solá
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-secondary text-sm font-normal transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-primary transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-primary transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-primary transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-bg/95 backdrop-blur-sm">
          <ul className="px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-secondary text-base font-normal transition-colors duration-200 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-line shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="font-display font-bold text-sm tracking-tight text-secondary hover:text-accent transition-colors duration-200"
        >
          DS
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:damiansola99@gmail.com"
              className="text-sm font-medium text-white bg-accent px-4 py-1.5 rounded-md hover:bg-accent-hover transition-colors duration-200"
            >
              Hablemos
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden text-secondary hover:text-accent transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-surface px-6 py-6 space-y-4 shadow-card">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:damiansola99@gmail.com"
            className="inline-block text-sm font-medium text-white bg-accent px-4 py-2 rounded-md"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  )
}

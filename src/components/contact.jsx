const links = [
  {
    label: 'Email',
    value: 'damiansola99@gmail.com',
    href: 'mailto:damiansola99@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'damiansola',
    href: 'https://www.linkedin.com/in/damiansola/',
  },
  {
    label: 'GitHub',
    value: 'DamianSola',
    href: 'https://github.com/DamianSola',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24 md:py-32 bg-secondary text-white">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          03 — Contacto
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-white/70 mb-12 max-w-md">
          Escribime y vemos si puedo ayudarte. Respondo en menos de 48 hs.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block bg-white/5 border border-white/10 rounded-lg p-5 hover:border-accent/50 hover:bg-white/10 transition-all duration-200"
            >
              <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">
                {link.label}
              </p>
              <p className="text-sm text-white group-hover:text-accent transition-colors duration-200 truncate">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:damiansola99@gmail.com"
          className="inline-block text-sm font-medium bg-accent text-white px-8 py-3.5 rounded-md hover:bg-accent-hover transition-colors duration-200"
        >
          Escribime
        </a>
      </div>
    </section>
  )
}

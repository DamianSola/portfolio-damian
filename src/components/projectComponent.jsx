'use client'

import Image from 'next/image'

function getDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}

export default function ProjectCard({ project }) {
  const { name, tagline, url, code, technologies, type, year, masterpiece, image } = project
  const domain = getDomain(url)
  const label = masterpiece ? 'Masterpiece' : type === 'client' ? 'Cliente' : 'Personal'

  return (
    <article
      className={`group bg-surface border rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ${
        masterpiece
          ? 'md:col-span-2 border-accent/50 hover:border-accent'
          : 'border-line hover:border-complementary/40'
      }`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block p-6">
        <div className={`relative mb-5 rounded-md bg-bg border border-line overflow-hidden ${masterpiece ? 'h-52 md:h-72' : 'h-44'}`}>
          {image ? (
            <Image
              src={image}
              alt={`Captura de ${name}`}
              fill
              className="object-cover object-top"
              sizes={masterpiece ? '(max-width: 768px) 100vw, 1024px' : '(max-width: 768px) 100vw, 480px'}
            />
          ) : (
            <>
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="font-mono text-sm text-secondary text-center truncate max-w-full">
                  {domain}
                </span>
              </div>
            </>
          )}
          <span className={`absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm bg-surface/90 border border-line ${masterpiece ? 'text-accent' : 'text-complementary'}`}>
            {label}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display font-semibold text-lg text-primary group-hover:text-accent transition-colors duration-200">
            {name}
          </h3>
          <span className="font-mono text-xs text-muted shrink-0 mt-1">{year}</span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-4">{tagline}</p>

        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-secondary bg-bg border border-line px-2 py-0.5 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </a>

      <div className="flex border-t border-line bg-bg/50">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs font-medium text-muted py-3 hover:text-accent hover:bg-accent-dim transition-all duration-200"
        >
          Live →
        </a>
        <div className="w-px bg-line" />
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs font-medium text-muted py-3 hover:text-complementary hover:bg-complementary-dim transition-all duration-200"
        >
          Código →
        </a>
      </div>
    </article>
  )
}

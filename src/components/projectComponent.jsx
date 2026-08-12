'use client'

function getDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}

export default function ProjectCard({ project, index }) {
  const { name, tagline, url, code, technologies, type, year } = project
  const domain = getDomain(url)
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="group bg-surface border border-line rounded-lg overflow-hidden shadow-card hover:shadow-card-hover hover:border-complementary/40 transition-all duration-300">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block p-6">
        <div className="relative mb-5 h-32 rounded-md bg-bg border border-line overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-4">
            <span className="font-mono text-[10px] text-complementary uppercase tracking-widest">
              {type === 'client' ? 'Cliente' : 'Personal'}
            </span>
            <span className="font-mono text-sm text-secondary text-center truncate max-w-full">
              {domain}
            </span>
          </div>
          <span className="absolute bottom-2 right-3 font-display font-extrabold text-4xl text-secondary/[0.06] select-none">
            {number}
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

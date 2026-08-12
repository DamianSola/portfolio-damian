'use client'

import ProjectCard from './projectComponent'
import projectData from './Data.json'

export default function Projects() {
  const { projects } = projectData

  return (
    <section id="proyectos" className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              01 — Trabajo
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-secondary">
              Proyectos seleccionados
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs">
            {projects.length} proyectos entre clientes reales y productos propios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import ProjectComponent from './projectComponent'
import projectData from './Data.json'

const featuredProjects = [
  ...projectData.myJobs.slice(0, 2),
  ...projectData.myProjects.slice(0, 2),
].slice(0, 4)

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-secondary uppercase tracking-widest mb-16 md:mb-20">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {featuredProjects.map((project) => (
            <ProjectComponent
              key={project.id}
              name={project.name}
              url={project.url}
              description={project.description}
              image_url={project.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

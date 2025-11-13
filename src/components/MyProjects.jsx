'use client'
import ProjectComponent from './projectComponent'
import projectData from "./Data.json"

const MyProjects = () => {
    const {myProjects} = projectData

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8" id='projects'>
      {/* Header Section */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl dark:text-gray-300 font-bold text-gray-800 dark:text-gray-400 mb-4">Mis Proyectos</h1>
        <p className="text-xl text-gray-600 dark:text-gray-500 max-w-2xl mx-auto mb-6">
          Una colección de mis trabajos más recientes y desafiantes
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center'>
        {myProjects.map((project, index) => (
          <ProjectComponent
            key={project.id}
            name={project.name}
            url={project.url}
            description={project.description}
            image_url={project.image_url}
            code={project.code}
            technologies={project.technologies || []} // Añade este campo a tu JSON
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
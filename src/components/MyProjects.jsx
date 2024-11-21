'use client'
import ProjectComponent from './projectComponent'
import projectData from "./Data.json"

const MyProjects = () => {

    const {myProjects} = projectData

  return (
      <div className='block md:px-20 px-10 justify-center text-center' id='projects'>
        <h1 className="text-2xl p-4 font-bold" data-aos="fade-up" >My projects</h1>
          <div className='flex flex-wrap justify-center w-full'>
            {myProjects.map((project) => (
                <ProjectComponent
                  key={project.id}
                  name={project.name}
                  url={project.url}
                  description={project.description}
                  image_url={project.image_url}
                  code={project.code}
                />
              ))
            }
          </div>
    </div>
  );
    
}

export default MyProjects;
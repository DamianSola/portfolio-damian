'use client'
import { useState, useEffect } from 'react';
import ProjectComponent from './projectComponent'
import projectData from "./Data.json"


const filtrarObjetosRepetidos = (array) => {
    const nombresUnicos = new Set();
    return array.filter(obj => {
      if (!nombresUnicos.has(obj.name)) {
        nombresUnicos.add(obj.name);
        return true;
      }
      return false;
    });
  };

const Projects = () => {

    const [projects, setProjects] = useState([]);

    console.log(projectData)



  useEffect(() => {
    // Función para obtener los despliegues
    const fetchDeployments = async () => {
      const response = await fetch('https://api.vercel.com/v5/deployments', {
        headers: {
          Authorization: `Bearer 2yq1NHgBLysfqkPWFvHIKJKF`, // Usa tu Access Token aquí
        },
      });
      const data = await response.json();
      const dataFilter = filtrarObjetosRepetidos(data.deployments);
      setProjects(dataFilter);
    };

    fetchDeployments();
  }, []);

  return (
      <div className='block md:px-20 px-10 justify-center text-center' id='projects'>
        <h1 className="text-2xl p-4 font-bold" >My projects</h1>
          <div className='flex flex-wrap justify-center w-full'>
            {projectData.map((project) => (
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

export default Projects;
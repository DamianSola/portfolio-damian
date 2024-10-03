'use client'
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProjectComponent from './ProjectCompnent';


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

    console.log(projects)

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
      <div className='block px-20 justify-center text-center'>
        <h1 className="text-2xl">Projects</h1>
        <div className='block w-2/3 '>
            <h1 className="text-xl">My Proyects in Vercel</h1>
            <div className='flex flex-wrap justify-left'>
                {projects.map((project) => (
                    <ProjectComponent
                    key={project.uid}
                    name={project.name}
                    url={project.url}
                    date={new Date(project.created).toLocaleString()}
                    state={project.state}
                    code={project.meta}
                />))}
            </div>
      </div>
    </div>
  );


    // const [projects, setProjects] = useState([]);
    // const [loading, setLoading] = useState(false);
    

    // return(
    //     <div id='projects' className='justify-center'>
    //         <h1 className="text-2xl">Projects</h1>
    //         <div className="flex flex-wrap justify-center">
                

    //         </div>
    //     </div>
    // )
    
}

export default Projects;

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
// import Image from "next/image";


const ProjectComponent = (props) => {

    const {code,image_url, url, description, name} = props;

    const [see, setSee] = useState(false);


    return(
        <div className="border border-gray-300 items-center rounded-lg p-6  md:m-2 m-4 shadow-md md:w-2/5 w-full" data-aos="fade-up">

            <aside className="flex items-center text-left">
                <img src={image_url} width={90} height={90} alt="image-project" 
                className="rounded-full p-4 " />
                <a href={url} target="_blank" className="text-xl font-bold mb-2 hover:underline duration-75">{name}</a>
            </aside>
            
               
            <aside className="flex text-sm items-center bg-gray-200 text-left rounded-lg w-full p-2 dark:bg-gray-800 dark:text-white">
               
                <FaGithub size={20}/>
                <a href={code} target="_blank" rel="noopener noreferrer" 
                className="px-2 hover:underline duration-75"
                >{code.slice(19)}</a>

            </aside>

            <aside className="text-justify w-auto py-4">
                {see ? <p className="text-sm ">{description}</p> : <p className="text-sm ">{description.slice(0,150)}...</p>}
                <span onClick={() =>  setSee(!see)} className=" text-gray-500 cursor-pointer dark:text-blue-500">{see ? ' see less' : " see more"}</span>
            </aside>
        
      </div>
    )
}

export default ProjectComponent;
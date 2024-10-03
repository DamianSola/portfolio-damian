
import { FaGithub } from "react-icons/fa";


const ProjectComponent = (props) => {

    const {name, description,url, code, date, state} = props;

    return(
        <div className="border border-gray-300 rounded-lg p-6 m-2 shadow-md w-80 bg-white">

            <aside className="flex items-center text-left justify-between">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
                <a href={`https://${url}`} target="_blank" 
                    className="px-4 py-2 text-white text-center m-2 items-center bg-gray-900 hover:bg-gray-700 duration-75 rounded-md min-w-20 shadow-lg"
                >visit</a>
            </aside>
            
            
            <aside className="flex text-sm items-center bg-gray-200 items-center text-left rounded-lg w-full p-2">
               
                <FaGithub size={20}/>
                {code.githubCommitAuthorLogin &&
                <a href={`https://github.com/${code.githubCommitAuthorLogin}/${code.githubCommitRepo}`} target="_blank" rel="noopener noreferrer" 
                className="px-2 hover:underline duration-75"
                
                >{`${code.githubCommitAuthorLogin}/${code.githubCommitRepo}`} </a>
            }
            </aside>

            <aside className="text-left">
                <p className={`text-sm font-medium ${state === 'READY' ? 'text-green-500' : 'text-red-500'}`}>
                    {state}
                </p>
                <p className="text-sm text-gray-900 mb-1">{date}</p>
            </aside>
        
      </div>
    )
}

export default ProjectComponent;
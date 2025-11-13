'use client'
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

const ProjectComponent = (props) => {
    const { code, image_url, url, description, name, technologies, delay = 0, type = "project" } = props;
    const [see, setSee] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Mapeo completo de tecnologías a íconos
    const techIcons = {
        javascript: <SiJavascript className="text-yellow-500" />,
        typescript: <SiTypescript className="text-blue-600" />,
        react: <SiReact className="text-cyan-500" />,
        nextjs: <SiNextdotjs className="text-gray-800" />,
        nodejs: <SiNodedotjs className="text-green-600" />,
        express: <SiExpress className="text-gray-600" />,
        python: <SiPython className="text-blue-600" />,
        mongodb: <SiMongodb className="text-green-500" />,
        postgresql: <SiPostgresql className="text-blue-700" />,
        tailwind: <SiTailwindcss className="text-cyan-500" />
    };

    return (
        <div 
           className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full max-w-md"
            data-aos="fade-up"
            data-aos-delay={delay}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Badge de tipo */}
            {type === "job" && (
                <div className="absolute top-3 right-3 z-10">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                        Profesional
                    </span>
                </div>
            )}

            {/* Image Container - Más compacto */}
            <div className="relative h-36 overflow-hidden">
                <img 
                    src={image_url} 
                    alt={`${name} project`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Overlay con botones - Más compactos */}
                <div className={`absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-900 p-2 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                    >
                        <FaExternalLinkAlt size={14} />
                    </a>
                    <a 
                        href={code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-900 p-2 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                    >
                        <FaGithub size={14} />
                    </a>
                </div>
            </div>

            {/* Content Container - Espacio mejor distribuido */}
            <div className="p-4">
                {/* Header - Más compacto */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FaCode className="text-white text-sm" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <a 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                               className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                                title={name}
                            >
                                {name}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technologies - Más compacto */}
                {technologies && technologies.length > 0 && (
                    <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                            {technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                                    title={tech}
                                >
                                    {techIcons[tech.toLowerCase()] || <FaCode size={10} />}
                                    <span className="max-w-16 truncate">{tech}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Description - Texto más compacto */}
                <div className="mb-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {see ? description : `${description.slice(0, 100)}${description.length > 100 ? '...' : ''}`}
                    </p>
                    {description.length > 100 && (
                        <button 
                            onClick={() => setSee(!see)}
                            className="text-blue-500 hover:text-blue-700 font-medium text-xs mt-1 transition-colors duration-300 flex items-center gap-1"
                        >
                            {see ? (
                                <>
                                    Ver menos
                                    <span className="text-xs">↑</span>
                                </>
                            ) : (
                                <>
                                    Ver más
                                    <span className="text-xs">↓</span>
                                </>
                            )}
                        </button>
                    )}
                </div>

                {/* Footer Links - Más compactos */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <a 
                        href={code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300 group/link text-xs"
                    >
                        <FaGithub size={12} />
                        <span className="font-medium group-hover/link:underline">
                            Código
                        </span>
                    </a>
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300 group/link text-xs"
                    >
                        <span className="font-medium group-hover/link:underline">
                            Demo
                        </span>
                        <FaExternalLinkAlt size={10} />
                    </a>
                </div>
            </div>

            {/* Efecto de borde animado - Más sutil */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
        </div>
    );
}

export default ProjectComponent;
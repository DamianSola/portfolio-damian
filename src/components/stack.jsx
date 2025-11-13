import { SiTypescript, SiNextdotjs, SiReact, SiExpress, SiMongodb, SiMongoose, SiPostgresql, SiTailwindcss, SiSequelize, SiPrisma } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

const StackTech = () => {
    const techStack = [
        {
            icon: <SiTypescript size={40} className="text-blue-600" />,
            name: "TypeScript",
            level: "Avanzado",
            color: "from-blue-500 to-blue-700",
            category: "Frontend"
        },
        {
            icon: <SiReact size={40} className="text-cyan-500" />,
            name: "React",
            level: "Avanzado",
            color: "from-cyan-400 to-cyan-600",
            category: "Frontend"
        },
        {
            icon: <SiTailwindcss size={40} className="text-teal-500" />,
            name: "Tailwind",
            level: "Avanzado",
            color: "from-teal-400 to-teal-600",
            category: "Frontend"
        },
        {
            icon: <SiNextdotjs size={40} className="text-gray-800" />,
            name: "Next.js",
            level: "Avanzado",
            color: "from-gray-700 to-gray-900",
            category: "Full Stack"
        },
        {
            icon: <RiNodejsLine size={40} className="text-green-600" />,
            name: "Node.js",
            level: "Avanzado",
            color: "from-green-500 to-green-700",
            category: "Backend"
        },
        {
            icon: <SiExpress size={40} className="text-gray-600" />,
            name: "Express",
            level: "Avanzado",
            color: "from-gray-500 to-gray-700",
            category: "Backend"
        },
        {
            icon: <SiPrisma size={40} className="text-cyan-500" />,
            name: "Prisma",
            level: "Intermedio",
            color: "from-cyan-400 to-cyan-600",
            category: "Frontend"
        },
        {
            icon: <SiMongoose size={40} className="text-red-600" />,
            name: "Mongoose",
            level: "Avanzado",
            color: "from-red-500 to-red-700",
            category: "Database"
        },
        {
            icon: <SiSequelize size={40} className="text-blue-400" />,
            name: "Sequelize",
            level: "Intermedio",
            color: "from-blue-300 to-blue-500",
            category: "Database"
        },
        {
            icon: <SiMongodb size={40} className="text-green-500" />,
            name: "MongoDB",
            level: "Avanzado",
            color: "from-green-400 to-green-600",
            category: "Database"
        },
        {
            icon: <SiPostgresql size={40} className="text-blue-800" />,
            name: "PostgreSQL",
            level: "Intermedio-Avanzado",
            color: "from-blue-600 to-blue-800",
            category: "Database"
        }
    ];

    const categories = {
        "Frontend": "border-l-blue-500",
        "Backend": "border-l-green-500",
        "Database": "border-l-purple-500",
        "Full Stack": "border-l-orange-500"
    };

    return (
        <div className="w-full py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-900" id='stack'>
            {/* Header Section */}
            <div className="text-center mb-12" data-aos="fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-400 mb-4">Mi Stack Tecnológico</h1>
                <p className="text-xl text-gray-600 dark:text-gray-500 max-w-2xl mx-auto mb-6">
                    Herramientas y tecnologías que utilizo para crear soluciones innovadoras
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Tech Grid */}
            <div className="max-w-7xl mx-auto">
                {/* Categorías como filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid de tecnologías */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" data-aos="fade-up">
                    {techStack.map((tech, index) => (
                        <div
                            key={tech.name}
                           className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Efecto de fondo gradiente en hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            
                            {/* Icono */}
                            <div className="flex justify-center mb-4">
                                <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                                    <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Nombre de la tecnología */}
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {tech.name}
                            </h3>

                            {/* Nivel de habilidad */}
                            <div className="text-center mb-3">
                                <span className="text-sm text-gray-500 dark:text-gray-300 font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-gray-200 transition-colors duration-300">
                                    {tech.level}
                                </span>
                            </div>

                            {/* Barra de progreso */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                                <div 
                                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                                    style={{
                                        width: tech.level.includes('Avanzado') ? '90%' : 
                                               tech.level.includes('Intermedio-Avanzado') ? '80%' : 
                                               tech.level.includes('Intermedio') ? '70%' : '60%'
                                    }}
                                ></div>
                            </div>

                            {/* Categoría */}
                            <div className="text-center">
                                <span className={`text-xs font-medium text-gray-400 border-l-2 ${categories[tech.category]} pl-2`}>
                                    {tech.category}
                                </span>
                            </div>

                            {/* Efecto de borde inferior */}
                            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${tech.color} group-hover:w-4/5 transition-all duration-500 rounded-t-full`}></div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2  md:grid-cols-4 gap-6" data-aos="fade-up">
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-2">10+</div>
                        <div className="text-gray-600 dark:text-gray-400">Tecnologías</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-2">3+</div>
                        <div className="text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-2">10+</div>
                        <div className="text-gray-600 dark:text-gray-400">Proyectos Completados</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-2">100%</div>
                        <div className="text-gray-600 dark:text-gray-400">Comprometido</div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12" data-aos="fade-up">
                    <p className="text-lg text-gray-600 mb-6 dark:text-gray-400">
                        ¿Interesado en trabajar con estas tecnologías?
                    </p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Hablemos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StackTech;
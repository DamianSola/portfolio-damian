import Link from "next/link";
import StackTech from "./stack";
import Image from "next/image";
import Foto from "./about2.png";

const About = () => {
  // Datos de logros personales (puedes modificarlos después)
  const achievements = [
    {
      id: 1,
      title: "Infinium Analytics",
      description: "Fue mi primer proyecto individual remunerado y atravece por varios desafios, principalmente en el desarrollo de estilos",
      year: "2023"
    },
    {
      id: 2,
      title: "TypeScript",
      description: "Desarrollé Mi primera aplicación con typeScript tanto en front-end como en back-end. La aplicacion es Checked",
      year: "2024"
    },
    {
      id: 3,
      title: "Prisma y Auuth",
      description: "Aprendi a usar Prisma ya que es una ORMs innovadora y practica. Tambien aprendi a autenticar con Auth0 y NextAuth",
      year: "2025"
    },
    {
      id: 4,
      title: "V0 y Supabase",
      description: "Actualmete estoy trabajando en proyecto en el que estoy usando varias AI, principalmente V0 pero tambien chatGPT y DeepSeek",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-dvh p-6 md:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white" id="about">
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-400 mb-4">Sobre Mí</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-2/5" data-aos="fade-right">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image 
              src={Foto}
              alt="Damian Solá - Full Stack Developer"
              className="rounded-2xl shadow-2xl relative transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5" data-aos="fade-left">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <header className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-400 mb-2">Damian Solá</h1>
              <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">Full Stack Developer</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto lg:mx-0"></div>
            </header>

            <section className="mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                ¡Hola! Soy un desarrollador web fullstack y estoy en el mundo tecnologico desde 2022.
                Desde entonces no he dejado de adquirir experiencia y aprender nuevas tecnologias.
                Me mantengo en aprendizage continuo, buenas practicas y tengo conocimiento en metodologia Scrum.
                Mi objetivo es crecer profesionalmente en proyectos innovadores, donde pueda mostrar mi talento y destacar.
                Valoro el compromiso, la lealtad, la buena comunicacion y el trabajo en equipo siempre yendo hacia el mismo objetivo.
              </p>
            </section>

            {/* Action Buttons */}
            <section className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <Link 
                href='https://drive.google.com/file/d/1euPqUY9l70FM2HMH_bGVMbdZf9MRrdAT/view?usp=sharing'
                target="_blank"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg border border-gray-700 shadow-md hover:bg-blue-600 hover:border-blue-500 transform hover:-translate-y-1 transition-all duration-300 text-center font-medium"
              >
                Descargar CV
              </Link>
              <Link 
                href="/#contact" 
                className="bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 hover:border-gray-400 transform hover:-translate-y-1 transition-all duration-300 text-center font-medium"
              >
                Contáctame
              </Link>
            </section>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-400 mb-4">Logros Destacados</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 p-6 border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                <span className="bg-blue-100 dark:bg-gray-300 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16">
        <StackTech />
      </div>
    </div>
  );
};

export default About;
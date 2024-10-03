import Link from "next/link";
import StackTech from "./stack";
import Image from "next/image";




const About = () => {
    return(
        <div className=" min-h-dvh p-6 md:p-16 " id="about">
            <div className="block md:flex items-center justify-between">
               
            <div className="md:p-6 w-full text-center">
            <img src="https://img.freepik.com/foto-gratis/disenador-web-freelance-masculino-maduro-sentado-espacio-trabajo-conjunto-trabajando-computadora-portatil-escribiendo-tareas-cuaderno_176420-7919.jpg"
                alt="foto-facha" className="rounded-xl"/>
            </div>
            <aside className="block py-6 md:p-6 w-full ">
            <h1 className="text-4xl">Damian Solá</h1>
            <p className="text-xl ">Full Stack Developer</p>
            {/* <p className="text-lg ">Salta, Argentina</p> */}
            <section className="py-4 flex items-center">
                <p className="text-2xl">College:</p>
                <Link href="/" className="text-lg mx-2 px-4 border-b border-[#ff0] w-fit font-bold hover:scale-105 duration-75">Henry Bootcamp</Link>
            </section>
                <section>
                    <p className="text-xl text-justify md:text-left py-2">
                    Hello! I am a passionate web developer who, after graduating from Henry, has continued working and constantly improving, learning new methods, technologies and best practices. 
                    My progress is huge and my desire to continue is also huge.
                    </p>
                </section>
                <section className="flex justify-left text-white p-2">
                    <Link href="/" className="bg-gray-900 p-2 m-2 rounded-md border border-gray-500 shadow-md hover:bg-[#ededed] hover:text-gray-900 duration-75"> My CV</Link>
                    <Link href="#contact" className="bg-gray-900 p-2 m-2 rounded-md border border-gray-500 shadow-md  hover:bg-[#ededed] hover:text-gray-900 duration-75">contact me</Link>
                </section>
            </aside>
            </div>
            <StackTech/>
        </div>
    )
}

export default About;
import Link from "next/link";
import StackTech from "./stack";
import Image from "next/image";
import Foto from "./about2.png"




const About = () => {
    return(
        <div className=" min-h-dvh p-6 md:px-16 " id="about">
            <div className="block md:flex items-center justify-between">
               
            <div className="md:p-6 w-full text-center">
            {/* <img src="https://img.freepik.com/foto-gratis/disenador-web-freelance-masculino-maduro-sentado-espacio-trabajo-conjunto-trabajando-computadora-portatil-escribiendo-tareas-cuaderno_176420-7919.jpg"
                alt="foto-facha" className="rounded-xl" data-aos="fade-right"/> */}
                  <Image src={Foto}
                alt="foto-facha" className="rounded-xl" data-aos="fade-right"/>
            </div>
            <aside className="block py-6 md:p-6 w-full text-center" >
                <h1 className="text-4xl" data-aos="fade-up">Damian Solá</h1>
                <p className="text-xl " data-aos="fade-up">Full Stack Developer</p>
          
                <section className="py-4 items-center w-full text-center" data-aos="fade-up">
                    <Link href="https://drive.google.com/file/d/1ay2GdzljXFzPU_iC8MIHhGw2L5dbJzrH/view?usp=sharing" 
                        target="_blank"
                        className="text-lg  border-b border-[#ff0] w-fit font-bold hover:scale-105 duration-75" >Henry Bootcamp</Link>
                </section>
                <section className="p-4" >
                    <p className="text-xl text-justify tracking-wider text-wrap" data-aos="fade-up">
                    Hello! I am a passionate web developer who, after graduating from Henry, has continued working and constantly improving, learning new methods, technologies and best practices. 
                    My progress is huge and my desire to continue is also huge.
                    </p>
                </section>
                <section className="flex justify-center md:justify-left  text-white p-2" data-aos="fade-up">
                    <Link href='https://drive.google.com/file/d/1rN8l9Fj4ZX5Kvin4wF309ykWOBNi-HwQ/view?usp=sharing'
                        target="_blank"
                        className="bg-gray-900 p-2 m-2 rounded-md border border-gray-500 shadow-md hover:bg-[#ededed] hover:text-gray-900 duration-75"> My CV</Link>
                    <Link href="/#contact" className="bg-gray-900 p-2 m-2 rounded-md border border-gray-500 shadow-md  hover:bg-[#ededed] hover:text-gray-900 duration-75">contact me</Link>
                </section>
            </aside>
            </div>
            <StackTech/>
        </div>
    )
}

export default About;
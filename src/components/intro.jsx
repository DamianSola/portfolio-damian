'use client'
import Image from "next/image"
import StackTech from "./stack"
import Link from "next/link"
import DamianImage from "./photo-portfolio1.jpg"
import DamianImage1 from "./photo-portfolio3.jpg"

const Intro = () => {
    return(
    <div className="md:p-8 p-6 flex flex-col md:flex-row md:justify-around md:min-h-dvh md:items-center bg-gradient-to-r from-cyan-500 to-blue-200 dark:to-blue-900 dark:from-cyan-500">
        
        <aside className="block md:hidden md:p-4 ">
            {/* <Image src="https://img.freepik.com/fotos-premium/ilustracion-fotografias-stock_1137879-157821.jpg"
            width={400} height={400} alt='foto-perfil'
            className="rounded-full	w-full"
            /> */}
            <Image src={DamianImage1}
            width={100} height={100} alt='foto-perfil'
            className="rounded-full	w-full"
            />
        </aside>
        
        <div className=" text-center md:w-1/2" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl md:py-6 py-4 font-bold">Welcome to my portfolio!</h1>
            <p className="text-sm md:text-xl md:py-6 py-4">
                {"Hello! I'm Damian Sola and I'm a software developer. "}
                {"I'm looking for a job while I continue learning and specializing by working on personal and paid freelance projects."}
            </p>

            <div className=" text-white w-full py-6">
                <Link href="#about" className="m-2 bg-gray-900 w-fit p-2 rounded-md border border-gray-500 hover:bg-transparent shadow-md duration-75 ">More about me</Link>
                <Link href="#projects" className="m-2 bg-gray-900 w-fit p-2 rounded-md border border-gray-500 hover:bg-transparent shadow-md duration-75 "> My projects</Link>
            </div>
        </div>

        <aside className="hidden md:block md:p-4 px-4" data-aos="fade-up">
            {/* <Image src="https://img.freepik.com/fotos-premium/ilustracion-fotografias-stock_1137879-157821.jpg"
            width={500} height={500} alt='foto-perfil'
            className="rounded-full	w-full"
            /> */}
            {/* <Image src={DamianImage}
            width={300} height={300} alt='foto-perfil'
            className="rounded-full	w-full"
            />  */}
            <Image src={DamianImage1}
            width={300} height={300} alt='foto-perfil'
            className="rounded-full	w-full"
            />
        </aside>
    </div>)
}

export default Intro
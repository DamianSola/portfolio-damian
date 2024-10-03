import {SiNextdotjs,SiReact, SiExpress, SiMongodb, SiMongoose, SiPostgresql, SiTailwindcss, SiSequelize} from "react-icons/si";
import {FaReact} from  "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";


const StackTech = ( ) => {
    return(
    <div className="w-full md:px-8 p-4 text-center" id='stack'>
        <h1 className="text-2xl font-bold">Stack Tech</h1>
        <div className="flex flex-wrap md:justify-around justify-between py-4 ">
            <div className="text-center hover:scale-105 duration-75">
                <SiReact size={50} className="w-20" />
                <p className="text-lg">React</p>
            </div>
            <div className="text-center  hover:scale-105 duration-75">
                <SiTailwindcss  size={50} className="w-20" />
                <p className="text-lg">Tailwind</p>
            </div>
            <div className="text-center p-2  hover:scale-105 duration-75">
                <SiNextdotjs  size={50} className="w-20" />
                <p className="text-lg">Nextjs</p>
            </div>
            <div className="text-center p-2  hover:scale-105 duration-75">
                <RiNodejsLine  size={50} className="w-20" />
                <p className="text-lg">Nodejs</p>
            </div>
            <div className="text-center p-2 text-5xl hover:scale-105 duration-75 ">
                <SiExpress  size={50} className="w-20" />
                <p className="text-lg">Express</p>
            </div>
            <div className="text-center p-2 text-5xl hover:scale-105 duration-75 ">
                <SiMongoose  size={50} className="w-20" />
                <p className="text-lg">Mongoose</p>
            </div>
            <div className="text-center p-2 text-5xl hover:scale-105 duration-75 ">
                <SiSequelize  size={50} className="w-20" />
                <p className="text-lg">Sequelize</p>
            </div> 
            <div className="text-center p-2 text-5xl hover:scale-105 duration-75 ">
                <SiMongodb  size={50} className="w-20" />
                <p className="text-lg">Mongodb</p>
            </div>
            <div className="text-center p-2 text-5xl hover:scale-105 duration-75 ">
                <SiPostgresql size={50} className="w-20"/>
                <p className="text-lg">Postgresql</p>

            </div>
        </div>
    </div>)
}

export default StackTech
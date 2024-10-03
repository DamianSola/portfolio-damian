// import Image from 'next/image';
// import LogoBlanco from "./DutyShiftBlanco.png";

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="text-white p-10 bg-gradient-to-r from-cyan-500 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3 md:font-medium font-semibold md:text-left text-center my-10">
              <ul className="space-y-2">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#stack" className="hover:underline">Stack tech</a></li>
                <li><a href="#contact" className="hover:underline">Projects</a></li>
              </ul>
            </div>
  
            <div className="w-full md:w-1/3" id='contact'>
              
              <h2 className="text-lg font-bold mb-4">Contact</h2>
              
              <p className="flex items-center">
                <IoIosMail size={30}/>
                <a href="mailto:damiansola99@gmail.com" className="hover:underline p-2">damiansola99@gmail.com</a></p>
                <p className="flex items-center">
                <FaLinkedin size={30}/>
                <a href="https://www.linkedin.com/in/damiansola/" className="hover:underline p-2">Damian Solá</a></p><p className="flex items-center">
                <FaGithub size={30}/>
                <a href="https://github.com/DamianSola" className="hover:underline p-2">DamianSola</a></p>
            </div>
  
          </div>
  
          {/* Línea separadora */}
          <div className="border-t border-blue-400 mt-8 pt-4 text-center items-center">
          
            <p>&copy; {new Date().getFullYear()} Damian Sola. All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
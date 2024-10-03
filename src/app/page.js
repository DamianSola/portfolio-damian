'use client'
import { useEffect } from "react";
import Intro from "@/components/intro";
import NavBar from "@/components/navBar";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1200});
  },[])

  return (
    <div className="items-center justify-items-center min-h-screen  ">
        <NavBar/>
      <main className="flex flex-col gap-8">
        <Intro/>
        <About/>
        <Projects/>
        <Footer/>
      </main>
      
    </div>
  );
}

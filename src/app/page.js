import Image from "next/image";
import Intro from "@/components/intro";
import NavBar from "@/components/navBar";
import StackTech from "@/components/stack";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function Home() {
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

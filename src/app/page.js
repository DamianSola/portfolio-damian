'use client'
import { useEffect, useState } from "react";
import Intro from "@/components/intro";
import NavBar from "@/components/navBar";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import MyProjects from "@/components/MyProjects";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [aosInitialized, setAosInitialized] = useState(false);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1200,
      once: true, // Las animaciones solo se ejecutan una vez
      offset: 100, // Offset para trigger de animaciones
      easing: 'ease-out-cubic', // Curva de easing mejorada
    });
    setAosInitialized(true);

    // Simular carga de recursos
    // const timer = setTimeout(() => {
    // }, 1500);
    setIsLoading(false);

    // Cleanup
    return () => {
      // clearTimeout(timer);
      AOS.refresh(); // Refresh AOS en desmontaje
    };
  }, []);

  // Efecto para refresh AOS cuando el contenido cambie
  useEffect(() => {
    if (aosInitialized) {
      AOS.refresh();
    }
  }, [aosInitialized]);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            {/* Logo animado */}
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
              <span className="text-2xl font-bold text-white">DS</span>
            </div>
            
            {/* Loading spinner */}
            <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-6"></div>
            
            {/* Texto de carga */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white animate-pulse">
                Cargando Portfolio
              </h2>
              <p className="text-cyan-300 text-sm">
                Preparando experiencia...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <section id="home" className="snap-start">
          <Intro />
        </section>

        {/* About Section */}
        <section id="about" className="snap-start">
          <About />
        </section>

        {/* Professional Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Personal Projects */}
        <section id="my-projects" className="snap-start">
          <MyProjects />
        </section>

        {/* Footer */}
        <section className="snap-start">
          <Footer />
        </section>
      </main>

      {/* Scroll Progress Indicator (opcional) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-40">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        ></div>
      </div>
    </div>
  );
}


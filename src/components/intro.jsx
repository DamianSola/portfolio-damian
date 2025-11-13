'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import DamianImage from "./photo-portfolio1.jpg"
import DamianImage1 from "./photo-portfolio3.jpg"

const Intro = () => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const fullText = "Full Stack Developer"

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + fullText[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, 100)
            
            return () => clearTimeout(timeout)
        }
    }, [currentIndex])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-purple-950 dark:to-slate-900 relative overflow-hidden py-8">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 md:-top-40 md:-right-40 md:w-80 md:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 md:-bottom-40 md:-left-40 md:w-80 md:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-20 left-20 w-60 h-60 md:top-40 md:left-40 md:w-80 md:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                                        linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-24">
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left w-full max-w-2xl mx-auto lg:mx-0" data-aos="fade-right">
                        {/* Welcome Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-white/80 font-medium">Disponible para trabajar</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="300">
                            Hola, soy{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Damián
                            </span>
                        </h1>

                        {/* Animated Typing Text */}
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 h-10 md:h-12 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="500">
                            <span className="text-cyan-400 font-mono">{currentText}</span>
                            <span className="ml-1 w-1 h-6 md:h-8 bg-cyan-400 animate-pulse"></span>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="700">
                            Desarrollador apasionado especializado en crear experiencias digitales excepcionales. 
                            Combino creatividad y expertise técnico para construir soluciones innovadoras que 
                            resuelven problemas reales.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="900">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-white">3+</div>
                                <div className="text-xs sm:text-sm text-gray-400">Años de Experiencia</div>
                            </div>
                            {/* <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                                <div className="text-xs sm:text-sm text-gray-400">Proyectos Completados</div>
                            </div> */}
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                                <div className="text-xs sm:text-sm text-gray-400">Comprometido</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1100">
                            <Link 
                                href="#about" 
                                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm md:text-base"
                            >
                                <span className="relative z-10">Conoce más sobre mí</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            
                            <Link 
                                href="#projects" 
                                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                            >
                                <span className="relative z-10">Ver Proyectos</span>
                                <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="hidden lg:flex items-center gap-2 mt-12 md:mt-16 text-white/60" data-aos="fade-up" data-aos-delay="1300">
                            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                            </div>
                            <span className="text-sm">Desplázate para descubrir</span>
                        </div>
                    </div>

                    {/* Image Section - Reducida */}
                    <div className="flex-1 flex justify-center mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
                        <div className="relative">
                            {/* Main Image Container - Más pequeño */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                                
                                {/* Image with Border Gradient */}
                                <div className="relative w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-1.5 sm:p-2">
                                    <div className="w-full h-full bg-slate-900 rounded-full p-1.5 sm:p-2">
                                        <Image 
                                            src={DamianImage1}
                                            alt="Damián Solá - Full Stack Developer"
                                            fill
                                            className="rounded-full object-cover shadow-2xl"
                                            priority
                                            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                        />
                                    </div>
                                </div>

                                {/* Floating Elements - Más pequeños */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-2xl rotate-12 opacity-80 animate-float">
                                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                                        <span className="text-cyan-400 font-bold text-xs sm:text-sm">React</span>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-2xl -rotate-12 opacity-80 animate-float animation-delay-2000">
                                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                                        <span className="text-blue-400 font-bold text-xs">Next.js</span>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 -right-6 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-xl rotate-45 opacity-80 animate-float animation-delay-4000">
                                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                                        <span className="text-purple-400 font-bold text-xs">TS</span>
                                    </div>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2 sm:px-6 sm:py-3 shadow-2xl">
                                <div className="text-center">
                                    <div className="text-white font-semibold text-sm sm:text-base">3+ años</div>
                                    <div className="text-cyan-400 text-xs sm:text-sm">Experiencia</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(12deg); }
                    50% { transform: translateY(-15px) rotate(12deg); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    )
}

export default Intro
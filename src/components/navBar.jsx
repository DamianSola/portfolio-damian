'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTheme } from '..themeContext.js';

const LinkItems = [  
    { link: "Inicio", linkRef: "/" },
    { link: "Sobre Mi", linkRef: "/#about" },
    { link: "Proyectos", linkRef: "/#projects" },
    { link: "Mi Stack", linkRef: "/#stack" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [scrollProgress, setScrollProgress] = useState(0);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const totalScroll = docHeight - windowHeight;
            const progress = (scrollTop / totalScroll) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        const handleSectionChange = () => {
            const sections = LinkItems.map(item => item.link.toLowerCase());
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveLink(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
            }
        };

        // window.addEventListener('scroll', handleScroll);
        // window.addEventListener('scroll', handleSectionChange);
        handleScroll();
        
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        //     window.removeEventListener('scroll', handleSectionChange);
        // };
    }, []);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
                : 'bg-transparent'
        }`}>
            {/* Scroll Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/30 dark:bg-gray-700/30">
                <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    {/* Logo - Mejorado para móvil */}
                    <div className="flex-shrink-0 z-50">
                        <Link 
                            href="/" 
                            className="group relative"
                            onClick={() => handleLinkClick("Home")}
                        >
                            <div className={`text-2xl md:text-3xl font-bold transition-all duration-300 group-hover:scale-105 ${
                                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                            }`}>
                                DS
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Mejorado responsivo */}
                    <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                        <div className="flex items-center space-x-1">
                            {LinkItems.map((item) => (
                                <Link 
                                    key={item.link}
                                    href={item.linkRef}
                                    onClick={() => handleLinkClick(item.link)}
                                    className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        activeLink === item.link
                                            ? isScrolled
                                                ? 'text-gray-900 dark:text-white bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 shadow-lg'
                                                : 'text-white bg-white/20 backdrop-blur-sm shadow-lg'
                                            : isScrolled
                                                ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {item.link}
                                    {activeLink === item.link && (
                                        <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                                            isScrolled ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white'
                                        }`}></div>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Separador visual */}
                        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 xl:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                                isScrolled
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}
                            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                        >
                            {theme === 'light' ? (
                                <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>

                        {/* CTA Button */}
                        <Link 
                            href="/#contact"
                            onClick={() => handleLinkClick("Contact")}
                            className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                                isScrolled
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25'
                                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                            }`}
                        >
                            <span className="hidden sm:inline">Hablemos</span>
                            <span className="sm:hidden">Contact</span>
                        </Link>
                    </div>

                    {/* Tablet Navigation (md: flex) */}
                    <div className="hidden md:flex lg:hidden items-center space-x-3">
                        {/* Theme Toggle para tablet */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all duration-300 ${
                                isScrolled
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}
                            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                        >
                            {theme === 'light' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>

                        {/* CTA Button para tablet */}
                        <Link 
                            href="/#contact"
                            onClick={() => handleLinkClick("Contact")}
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                                isScrolled
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25'
                                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                            }`}
                        >
                            Contact
                        </Link>

                        {/* Mobile menu button para tablet */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                                isScrolled 
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' 
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative w-6 h-6">
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
                                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile menu button (solo móvil) */}
                    <div className="flex md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                                isScrolled 
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' 
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative w-6 h-6">
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
                                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Mejorado completamente */}
            <div 
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
                    isOpen 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                }`}
            >
                {/* Overlay de fondo */}
                <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        isOpen ? 'opacity-50' : 'opacity-0'
                    }`}
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Panel del menú */}
                <div 
                    className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50 transform transition-transform duration-500 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Header del menú móvil */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                Menú
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navegación móvil */}
                        <div className="flex-1 overflow-y-auto py-6">
                            <div className="space-y-2 px-6">
                                {LinkItems.map((item) => (
                                    <Link
                                        key={item.link}
                                        href={item.linkRef}
                                        onClick={() => handleLinkClick(item.link)}
                                        className={`block px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                                            activeLink === item.link
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            {item.link}
                                            {activeLink === item.link && (
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Footer del menú móvil */}
                        <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                            {/* Theme Toggle en móvil */}
                            <button
                                onClick={toggleTheme}
                                className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <span className="font-semibold">
                                    {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                                </span>
                                {theme === 'light' ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </button>

                            {/* CTA Button en móvil */}
                            <Link 
                                href="/#contact"
                                onClick={() => handleLinkClick("Contact")}
                                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-2xl font-semibold text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                            >
                                Hablemos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
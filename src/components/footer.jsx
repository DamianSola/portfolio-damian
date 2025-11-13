import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactLinks = [
        {
            icon: <IoIosMail size={24} />,
            href: "mailto:damiansola99@gmail.com",
            text: "damiansola99@gmail.com",
            label: "Enviar email"
        },
        {
            icon: <FaLinkedin size={24} />,
            href: "https://www.linkedin.com/in/damiansola/",
            text: "Damian Solá",
            label: "LinkedIn profile"
        },
        {
            icon: <FaGithub size={24} />,
            href: "https://github.com/DamianSola",
            text: "DamianSola",
            label: "GitHub profile"
        }
    ];

    const navigationLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Stack Tech", href: "#stack" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-purple-950 dark:to-slate-900 text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-1" data-aos="fade-up">
                            <Link href="/" className="inline-block">
                                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                                    DS
                                </div>
                            </Link>
                            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                                Desarrollador Full Stack apasionado por crear soluciones innovadoras 
                                y experiencias digitales excepcionales. Siempre aprendiendo y evolucionando.
                            </p>
                            <div className="flex space-x-4">
                                {contactLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                                        aria-label={link.label}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                            {link.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Navegación Rápida
                            </h3>
                            <ul className="space-y-3">
                                {navigationLinks.map((link, index) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                                            data-aos="fade-up"
                                            data-aos-delay={150 + (index * 50)}
                                        >
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:col-span-1" id='contact' data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Contacto Directo
                            </h3>
                            <div className="space-y-4">
                                {contactLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                        className="group flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
                                        data-aos="fade-up"
                                        data-aos-delay={250 + (index * 50)}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                            {link.icon}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">
                                                {link.text}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {link.label}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                        
                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-gray-300" data-aos="fade-up">
                            <span>&copy; {currentYear} Damian Solá. Todos los derechos reservados.</span>
                            <span className="hidden sm:inline">•</span>
                            {/* <span className="flex items-center space-x-1">
                                <span>Hecho con</span>
                                <FaHeart className="text-red-500 animate-pulse" size={14} />
                                <span>y mucho código</span>
                            </span> */}
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                            aria-label="Volver al inicio"
                            data-aos="fade-up"
                        >
                            <span className="font-medium">Volver arriba</span>
                            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating CTA */}
            <div className="fixed bottom-8 right-8 z-40" data-aos="fade-left">
                <a
                    href="mailto:damiansola99@gmail.com"
                    className="group flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                    <IoIosMail size={20} />
                    <span className="font-semibold">Hablemos</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
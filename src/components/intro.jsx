import Image from 'next/image'
import Link from 'next/link'
import heroPhoto from './photo-portfolio3.jpg'

export default function Intro() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-surface border border-line rounded-full px-4 py-1.5 mb-8 shadow-card animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-secondary tracking-wide">
                Disponible para proyectos
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-5 animate-fade-up text-balance text-primary">
              Damian{' '}
              <span className="text-accent">Solá</span>
            </h1>

            <p className="text-lg sm:text-xl text-secondary max-w-lg mx-auto lg:mx-0 mb-3 animate-fade-up">
              Desarrollador fullstack que construye productos web
              con TypeScript, React y Node.js.
            </p>

            <p className="font-mono text-xs sm:text-sm text-muted mb-8 animate-fade-up">
              Buenos Aires, Argentina
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-up">
              <Link
                href="#proyectos"
                className="w-full sm:w-auto text-sm font-medium bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-hover transition-colors duration-200 shadow-card"
              >
                Ver proyectos
              </Link>
              <a
                href="https://github.com/DamianSola"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-sm font-medium border border-line text-secondary bg-surface px-6 py-3 rounded-md hover:border-complementary hover:text-complementary transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute -inset-3 rounded-2xl border border-complementary/30 rotate-3" />
              <div className="absolute -inset-3 rounded-2xl bg-accent/10 -rotate-2" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-surface shadow-card-hover">
                <Image
                  src={heroPhoto}
                  alt="Damian Solá — Fullstack Developer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-[10px] font-mono uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-complementary/50 to-transparent" />
      </div>
    </section>
  )
}

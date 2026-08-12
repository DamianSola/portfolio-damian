import Image from 'next/image'
import aboutPhoto from './about2.png'
import sidePhoto from './photo-portfolio1.jpg'

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Prisma',
]

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24 md:py-32 bg-surface border-y border-line">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          02 — Perfil
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-secondary mb-12">
          Sobre mí
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden border border-line shadow-card">
              <Image
                src={aboutPhoto}
                alt="Damian Solá"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-28 h-28 rounded-lg overflow-hidden border-2 border-surface shadow-card relative">
              <Image
                src={sidePhoto}
                alt="Damian Solá"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
          </div>

          <div>
            <div className="space-y-5 text-muted leading-relaxed mb-10">
              <p>
                Soy desarrollador web fullstack desde 2022. Me especializo en
                construir aplicaciones completas — desde la interfaz hasta la
                API — con un enfoque en código mantenible y experiencias claras
                para el usuario.
              </p>
              <p>
                He trabajado en proyectos para clientes reales en sectores como
                legal, salud, inmobiliario y analytics, además de productos
                propios donde experimento con nuevas herramientas y arquitecturas.
              </p>
              <p>
                Valoro la comunicación directa, el aprendizaje continuo y
                entregar soluciones que funcionen en producción, no solo en
                localhost.
              </p>
            </div>

            <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">
              Stack habitual
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-secondary bg-bg border border-line px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1AVUQwSAXyd_0uP4dlJjzHd9_MxhND2-P/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-accent hover:text-complementary transition-colors duration-200"
            >
              Descargar CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

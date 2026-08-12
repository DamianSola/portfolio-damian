export default function Intro() {
  return (
    <section className="h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-primary tracking-hero mb-6">
          Damian Solá
        </h1>
        <p className="text-lg md:text-xl text-secondary font-normal mb-4">
          Fullstack Developer
        </p>
        <p className="text-sm md:text-base text-secondary font-normal tracking-wide">
          TypeScript &bull; React &bull; Node.js
        </p>
      </div>
    </section>
  )
}

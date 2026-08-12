export default function Contact() {
  return (
    <section
      id="contacto"
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <h2 className="text-sm font-medium text-secondary uppercase tracking-widest mb-10 md:mb-12">
          Contacto
        </h2>
        <a
          href="mailto:damiansola99@gmail.com"
          className="inline-block px-8 py-3 border border-white/10 text-primary text-sm font-medium transition-colors duration-200 hover:border-white/30 hover:text-primary"
        >
          escribime
        </a>
      </div>
    </section>
  )
}

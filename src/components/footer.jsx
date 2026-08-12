export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 py-8 bg-bg border-t border-line">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>© {year} Damian Solá</p>
        <p className="font-mono text-secondary/60">Hecho con Next.js</p>
      </div>
    </footer>
  )
}

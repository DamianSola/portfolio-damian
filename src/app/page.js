import NavBar from '@/components/navBar'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

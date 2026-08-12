'use client'

import { useEffect } from 'react'
import NavBar from '@/components/navBar'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import About from '@/components/about'
import Contact from '@/components/contact'

export default function Home() {
  useEffect(() => {
    const dot = document.createElement('div')
    dot.className = 'cursor-dot'
    document.body.appendChild(dot)

    const moveCursor = (e) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) dot.classList.add('hover')
    }
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) dot.classList.remove('hover')
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      dot.remove()
    }
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}

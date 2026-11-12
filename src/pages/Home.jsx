import {
  Navbar,
  Hero,
  Projects,
  About,
  Skills,
  Experience,
  Contact,
  Footer,
} from '../components'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = location.hash.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <div className="portfolio">
      <Navbar />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home

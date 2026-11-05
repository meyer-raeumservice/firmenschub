import { useEffect } from 'react'
import { initInteractions } from './lib/interactions.js'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Services } from './components/Services.jsx'
import { WhyUs } from './components/WhyUs.jsx'
import { Industries } from './components/Industries.jsx'
import { Process } from './components/Process.jsx'
import { About } from './components/About.jsx'
import { Faq } from './components/Faq.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  useEffect(() => initInteractions(), [])

  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <WhyUs />
        <Industries />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

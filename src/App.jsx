import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { gsap } from 'gsap'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

export default function App() {
  const appRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stagger-in', { opacity: 0, y: 24, duration: 0.8, stagger: 0.08, ease: 'power3.out' })
    }, appRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <color attach="background" args={[ '#0b1220' ]} />
          <Stars radius={50} depth={80} count={4000} factor={4} saturation={0} fade speed={0.8} />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(251,150,31,0.12),transparent)]" />
      </div>

      <header className="section py-6 flex items-center justify-between">
        <a href="#" className="stagger-in flex items-center gap-3">
          <img src="/favicon.svg" alt="HB" className="w-8 h-8"/>
          <span className="font-semibold">Hicham Benaalioua</span>
        </a>
        <nav className="stagger-in flex items-center gap-4 text-sm">
          <a href="#experience" className="hover:text-brand-orange">Expérience</a>
          <a href="#projects" className="hover:text-brand-orange">Projets</a>
          <a href="#skills" className="hover:text-brand-orange">Compétences</a>
          <a href="#contact" className="hover:text-brand-orange">Contact</a>
        </nav>
      </header>

      <main className="space-y-24 md:space-y-36 pb-24">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <section id="contact" className="section">
          <div className="card p-6 md:p-10">
            <h2 className="section-title mb-6">Contact</h2>
            <div className="grid gap-6 md:grid-cols-2 text-slate-300">
              <div>
                <p className="mb-3 flex items-center gap-2">
                  <FaEnvelope className="text-brand-orange"/> 
                  <a href="mailto:benaaliouahicham@gmail.com">benaaliouahicham@gmail.com</a>
                </p>
                <p className="mb-3 flex items-center gap-2">
                  <FaPhone className="text-brand-orange"/>
                  <a href="tel:+212674848832">+212 6 74 84 88 32</a>
                </p>
              </div>
              <div>
                <p className="mb-3 flex items-center gap-2">
                  <FaLinkedin className="text-brand-orange"/>
                  <a href="https://www.linkedin.com/in/hicham-benaalioua" target="_blank" rel="noreferrer">
                    /in/hicham-benaalioua
                  </a>
                </p>
                <p className="mb-3 flex items-center gap-2">
                  <FaGithub className="text-brand-orange"/>
                  <a href="https://github.com/HichamBenaalioua" target="_blank" rel="noreferrer">
                    /HichamBenaalioua
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section py-10 text-sm text-slate-400">
        © {new Date().getFullYear()} Hicham Benaalioua.
      </footer>
    </div>
  )
}

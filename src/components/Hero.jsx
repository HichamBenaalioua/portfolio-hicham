import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.headline', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' })
      gsap.fromTo('.highlight', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1,0.7)', delay: 0.2 })
      gsap.from('.feature', { y: 16, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.05, delay: 0.2 })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="section pt-10 md:pt-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="headline flex items-center gap-3 mb-4">
            <span className="badge">Développeur Web & Mobile</span>
            <span className="badge">DevOps • Tests</span>
          </div>
          <h1 className="headline text-4xl md:text-6xl font-black leading-tight">
            Bonjour, je suis <span className="text-brand-orange">Hicham</span> —
            je conçois des solutions <span className="highlight underline decoration-brand-orange">efficaces et évolutives</span>.
          </h1>
          <p className="feature mt-6 text-slate-300 md:text-lg">
            Lauréat de l’EMSI Marrakech en Ingénierie Informatique & Réseaux. Passionné par le développement et l’automatisation,
            avec des expériences en WordPress/PHP, Flutter, Laravel, Spring Boot, React et CI/CD.
          </p>
          <div className="feature mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-brand-orange text-slate-950 font-semibold hover:opacity-90">Voir les projets</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700">Me contacter</a>
          </div>
        </div>
        <div className="card p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-2">Profil</h3>
          <p className="text-slate-300">
            Jeune diplômé en développement informatique, avec une solide formation technique et des expériences pratiques.
            Je souhaite contribuer à des projets innovants et orientés résultats.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
            <div className="space-y-2">
              <div className="badge">Arabe (Natif)</div>
              <div className="badge">Français (Intermédiaire)</div>
              <div className="badge">Anglais (Avancé)</div>
            </div>
            <div className="space-y-2">
              <div className="badge">EMSI (2021–2024)</div>
              <div className="badge">ISTA Agadir (2018–2020)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

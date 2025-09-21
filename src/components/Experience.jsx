export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title mb-6">Expérience</h2>
      <div className="grid gap-6">
        <article className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Stage — Développeur PHP / WordPress & SEO</h3>
            <span className="text-sm text-slate-400">Avr 2025 – Juin 2025 • Seriff (Casablanca, Remote)</span>
          </div>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Fonctionnalités personnalisées en PHP (shortcodes, widgets, hooks/filtres).</li>
            <li>Intégrations d’API et optimisation backend.</li>
            <li>Bonnes pratiques SEO (indexation, erreurs de crawl, performance).</li>
            <li>Résolution de bugs & maintenance.</li>
          </ul>
        </article>
        <article className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Stage PFE — Ingénieur Logiciel (Dév & Tests)</h3>
            <span className="text-sm text-slate-400">Mars 2024 – Août 2024 • Fantastic.app (Agadir)</span>
          </div>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Web & mobile (Flutter, Laravel, Vue.js) + tests unitaires & d’intégration.</li>
            <li>Recette fonctionnelle, bug hunting, pipeline CI/CD (GitHub Actions).</li>
            <li>Intégration chatbot Gemini & documentation des tests.</li>
          </ul>
        </article>
        <article className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Stage PFA — Développeur Full Stack</h3>
            <span className="text-sm text-slate-400">Juil 2023 – Sept 2023 • New Dev Maroc (Fès)</span>
          </div>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>App mobile & web pour professions libérales.</li>
            <li>React, React Native, Spring Boot, PostgreSQL, Node.js.</li>
            <li>Architecture scalable & sécurisée.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

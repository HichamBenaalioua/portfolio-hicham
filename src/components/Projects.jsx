export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title mb-6">Projets Académiques</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="card p-6">
          <h3 className="text-lg font-semibold">Localisation Pharmacies & Restaurants</h3>
          <p className="mt-2 text-slate-300">Plateforme de géolocalisation avec Spring Boot & React.</p>
          <ul className="mt-3 text-sm text-slate-400 list-disc list-inside space-y-1">
            <li>Recherche avancée & recommandations</li>
            <li>Tests fonctionnels & performance</li>
          </ul>
        </article>
        <article className="card p-6">
          <h3 className="text-lg font-semibold">E‑commerce + Scraping</h3>
          <p className="mt-2 text-slate-300">Plateforme e‑commerce avec Django & React.</p>
          <ul className="mt-3 text-sm text-slate-400 list-disc list-inside space-y-1">
            <li>Scraping automatisé (Scrapy)</li>
            <li>Gestion produits & prix en temps réel</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

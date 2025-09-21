export default function Skills() {
  const tags = {
    'Programmation': ['Java', 'Python', 'JavaScript', 'PHP', 'Dart'],
    'Frameworks': ['Spring Boot', 'Laravel', 'Node.js', 'React', 'Vue.js', 'Flutter'],
    'Tests': ['Selenium', 'JUnit', 'Postman', 'PHPUnit'],
    'Méthodologies': ['Agile (Scrum, XP)', 'Cycle en V', 'CI/CD'],
    'Bases de données': ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
    'Outils': ['Git', 'Docker', 'GitHub Actions', 'Jira', 'Trello', 'Confluence', 'VS Code']
  }

  return (
    <section id="skills" className="section">
      <h2 className="section-title mb-6">Compétences</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(tags).map(([group, items]) => (
          <div key={group} className="card p-6">
            <h3 className="text-lg font-semibold mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(i => <span key={i} className="badge">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { FaReact, FaLaravel, FaDocker, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiFlutter, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const tags = {
    'Langages': [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaReact /> }, 
      { name: 'PHP', icon: <FaLaravel /> },
      { name: 'Dart', icon: <SiFlutter /> },
    ],
    'Frameworks': [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Laravel', icon: <FaLaravel /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Flutter', icon: <SiFlutter /> },
    ],
    'Bases de données': [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    'Outils & DevOps': [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'GitHub Actions', icon: <FaGithub /> },
    ]
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title mb-6">Compétences</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(tags).map(([group, items]) => (
          <div key={group} className="card p-6">
            <h3 className="text-lg font-semibold mb-3">{group}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((i, idx) => (
                <span key={idx} className="badge flex items-center gap-2">
                  {i.icon} {i.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

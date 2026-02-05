

import "./Projects.css";

const projects = [
  { 
    title: "Expense Tracker", 
    tech: [], 
    link: "#",
    description: "A full-stack application to track your daily expenses and manage your budget effectively.",
  },
  { 
    title: "Blog Platform", 
    tech: [], 
    link: "https://blog.faseeh.site",
    description: "A feature-rich blog platform that allows users to create, edit, and publish their articles.",
  },
  { 
    title: "MyContacts API", 
    tech: [], 
    link: "#",
    description: "A RESTful API for managing contacts, with user authentication and authorization.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
      {projects.map((p, i) => (
        <div key={i} className="group project-card">
          <div className="project-card-content">
            <h3 className="project-card-title">
              {p.link && p.link !== "#" ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{p.title}</a>
              ) : (
                p.title
              )}
            </h3>
            <p className="project-card-description">{p.description}</p>
            <div className="project-card-tech-stack">
              {p.tech.map((t, idx) => <span key={idx} className="project-card-tech-item">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
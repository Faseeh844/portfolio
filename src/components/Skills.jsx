

import "./Skills.css";

export default function Skills() {
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript"] },
    { category: "Frameworks & Libraries", items: ["React", "Node.js", "Django REST", "Express.js", "Pandas", "NumPy"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Postman", "Vercel", "Render"] },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              {/* Icon placeholder */}
              <div className="skill-card-icon">
                {/* You can replace this with an actual icon */}
                &#128187; 
              </div>
              <h3 className="skill-card-category">{skillGroup.category}</h3>
              <div className="skill-card-items">
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="skill-card-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
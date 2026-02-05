import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-description-container">
          <p className="about-description">
            I am a passionate Full Stack Developer with a strong foundation in creating dynamic and responsive web applications. My journey in tech has been driven by a desire to solve complex problems and build beautiful, intuitive user interfaces. I am a quick learner, a team player, and I am always eager to take on new challenges.
          </p>
        </div>

        <div className="about-grid">
          {/* Education */}
          <div>
            <h3 className="about-grid-item-title">Education</h3>
            <div className="about-grid-item-card">
              <h4 className="about-grid-item-card-title">Bachelor of Computer Applications</h4>
              <p className="about-grid-item-card-subtitle">Jain University Bengaluru</p>
              <p className="about-grid-item-card-date">2022 – 2025</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="about-grid-item-title">Certifications</h3>
            <div className="about-grid-item-card">
              <h4 className="about-grid-item-card-title">Explore App Development with the MERN Stack</h4>
              <p className="about-grid-item-card-subtitle">LinkedIn Learning</p>
              <p className="about-grid-item-card-date">June 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
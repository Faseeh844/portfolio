import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-grid"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="hero-title-name">Faseeh Bilal</span></h1>
        <p className="hero-description">
          Detail-oriented Full Stack Developer proficient in MERN stack and Python/Django. Passionate about building secure, user-centric applications.
        </p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
    </section>
  );
}
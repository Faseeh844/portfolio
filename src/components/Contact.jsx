import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-blur"></div>
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:billalahamed84444@gmail.com" className="contact-button">
          Say Hello
        </a>
        <div className="contact-social-links">
          <a href="https://github.com/faseeh844" target="_blank" rel="noopener noreferrer" className="contact-social-link">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
            <FaLinkedin size={28} />
          </a>
          {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
            <FaTwitter size={28} />
          </a>*/}
        </div>
      </div>
    </section>
  );
}
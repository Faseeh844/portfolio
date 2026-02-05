import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-links">
        <a href="https://github.com/faseeh844" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaLinkedin size={24} />
        </a>
        {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaTwitter size={24} />
        </a>*/}
      </div>
      &copy; {new Date().getFullYear()} Faseeh Bilal. All rights reserved.
    </footer>
  );
}
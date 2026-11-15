import { Mail, Phone, Heart } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../common/BrandIcons';
import { navLinks, personalInfo } from '../../data/portfolioData';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Gargi Sarkar"
            >
              <div className="logo-emblem">
                <span className="emblem-text">GS</span>
              </div>
              <span className="logo-title">
                Gargi <span className="logo-accent">Sarkar</span>
                <span className="logo-dot" />
              </span>
            </a>
            <p className="footer-tagline">
              Crafting robust software systems, exploring intelligent architectures, and securing the digital horizon with modern craftsmanship.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigation</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-social-section">
            <h4 className="footer-nav-title">Channels</h4>
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              {personalInfo.instagram && (
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <Instagram size={17} />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="footer-social-link"
                  aria-label="Phone"
                >
                  <Phone size={17} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. Handcrafted with precision &amp; care.
          </p>
          <span className="footer-atelier-mark">
            Midnight Forest Edition <Heart size={12} className="heart-icon" /> Kolkata, India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

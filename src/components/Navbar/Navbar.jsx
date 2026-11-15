import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a
          href="#"
          className="navbar-logo"
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

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeLink}
            className="navbar-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;

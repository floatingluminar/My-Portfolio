import { useEffect, useState } from 'react';
import { ArrowRight, Mail, ChevronDown, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-glow" />
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-editorial-meta">
            <span className="editorial-num">N° 01</span>
            <span className="editorial-divider">/</span>
            <span className="hero-availability">
              <span className="availability-dot" />
              Available for New Opportunities
            </span>
          </div>

          <div className="hero-intro-label">
            <span className="intro-line" />
            <span>Developer &amp; Technology Enthusiast</span>
          </div>

          <h1 className="hero-headline">
            Crafting <span className="gold-highlight">Digital Experiences</span> with Modern Engineering &amp; <span className="italic-serif">Artistry</span>.
          </h1>

          <div className="hero-role-row">
            <span className="role-prefix">Current Focus:</span>
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">{personalInfo.bio}</p>

          {personalInfo.location && (
            <div className="hero-location">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          )}

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              Explore My Work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="atelier-frame">
            <div className="frame-corner top-left" />
            <div className="frame-corner top-right" />
            <div className="frame-corner bottom-left" />
            <div className="frame-corner bottom-right" />

            <div className="frame-inner">
              <img src={profileImg} alt={personalInfo.name} className="hero-portrait" />
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down to About">
        <span className="scroll-text">DISCOVER</span>
        <ChevronDown size={14} />
      </a>
    </section>
  );
};

export default Hero;

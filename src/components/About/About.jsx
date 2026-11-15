import { User, MapPin, GraduationCap, Target, Award, Shield, Layers, Cloud, Brain, GitBranch, Sparkles } from 'lucide-react';
import { aboutData } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const iconMap = {
    Focus: <Target size={18} />,
    University: <GraduationCap size={18} />,
    Degree: <GraduationCap size={18} />,
    CGPA: <Award size={18} />,
    Location: <MapPin size={18} />,
  };

  const interestIcons = {
    Shield,
    Layers,
    Cloud,
    Brain,
    GitBranch,
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 02</span>
            <span className="section-divider">/</span>
            <span className="section-label">Biography &amp; Journey</span>
          </div>
          <h2 className="section-title">The Story Behind The Craft</h2>
        </div>

        <div className="about-grid">
          <div className="about-text-column fade-up">
            <div className="about-editorial-card glass-card">
              <div className="editorial-lead-quote">
                &ldquo;Transforming curiosity into digital craftsmanship.&rdquo;
              </div>
              <div className="about-text-content">
                {aboutData.description.map((para, i) => (
                  <p
                    key={i}
                    className={`about-paragraph ${para.toLowerCase().includes('still learning') ? 'learning-tagline' : ''}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="about-highlights-column fade-up">
            <div className="highlights-header">
              <span className="highlights-title">Academic &amp; Profile Summary</span>
            </div>
            <div className="about-highlights">
              {aboutData.highlights.map((item, i) => (
                <div key={i} className="highlight-card glass-card">
                  <div className="highlight-icon">
                    {iconMap[item.label] || <User size={18} />}
                  </div>
                  <div className="highlight-info">
                    <span className="highlight-label">{item.label}</span>
                    <span className="highlight-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {aboutData.interests && (
          <div className="about-interests-section fade-up">
            <div className="interests-header">
              <Sparkles size={18} className="interests-header-icon" />
              <h3 className="interests-title">Core Interests &amp; Disciplines</h3>
            </div>
            <div className="interests-grid">
              {aboutData.interests.map((interest, i) => {
                const IconComp = interestIcons[interest.icon] || Sparkles;
                return (
                  <div key={i} className="interest-card glass-card">
                    <div className="interest-icon">
                      <IconComp size={20} />
                    </div>
                    <div className="interest-info">
                      <h4 className="interest-name">{interest.name}</h4>
                      <p className="interest-desc">{interest.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

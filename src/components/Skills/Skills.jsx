import { Code2, Globe, Database, Wrench, Layers, Palette, FileSpreadsheet, Terminal, Sparkles } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import './Skills.css';

const iconComponents = { Code2, Globe, Database, Wrench, Layers, Palette, FileSpreadsheet, Terminal };

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 04</span>
            <span className="section-divider">/</span>
            <span className="section-label">Technical Repertoire</span>
          </div>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-subtitle">
            Curated disciplines, modern frameworks, and engineering tools crafted for high-performance software.
          </p>
          <br />
          <br />
        </div>

        <div className="skills-grid">
          {skillsData.map((category, i) => {
            const IconComponent = iconComponents[category.icon] || Code2;
            return (
              <div key={i} className="skills-category-card glass-card fade-up">
                <div className="skills-category-header">
                  <div className="skills-icon-frame">
                    <IconComponent size={20} />
                  </div>
                  <div className="category-header-text">
                    <h3 className="skills-category-title">{category.category}</h3>
                    <span className="skills-count">{category.skills.length} competencies</span>
                  </div>
                </div>

                <div className="skills-chips-grid">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="skill-chip">
                      <div className="chip-indicator">
                        <Sparkles size={11} className="chip-sparkle" />
                      </div>
                      <span className="chip-name">{skill.name}</span>
                      {skill.level && (
                        <span className="chip-level-tag">{skill.level}%</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

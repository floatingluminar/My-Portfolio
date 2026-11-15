import { Trophy, Calendar, ExternalLink, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { achievementsData } from '../../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 07</span>
            <span className="section-divider">/</span>
            <span className="section-label">Milestones &amp; Honors</span>
          </div>
          <h2 className="section-title">National Competitions &amp; Honors</h2>
        </div>

        <div className="achievements-container">
          {achievementsData.map((item, index) => (
            <div key={index} className="achievement-showcase glass-card fade-up">
              <div className="achievement-info">
                <div className="achievement-header-row">
                  <div className="achievement-trophy-badge">
                    <Trophy size={24} />
                  </div>
                  <div className="achievement-meta-badges">
                    <span className="achievement-tag highlight">
                      <Sparkles size={12} />
                      {item.badge}
                    </span>
                    <span className="achievement-date">
                      <Calendar size={13} />
                      {item.date}
                    </span>
                  </div>
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-org">{item.organization}</p>
                <p className="achievement-desc">{item.description}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="achievement-highlights-list">
                    <h4 className="achievement-highlights-title">Key Highlights</h4>
                    <ul>
                      {item.highlights.map((point, i) => (
                        <li key={i} className="highlight-point">
                          <CheckCircle2 size={15} className="point-icon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.skills && (
                  <div className="achievement-skills">
                    {item.skills.map((skill, j) => (
                      <span key={j} className="achievement-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}

                {item.certificateUrl && (
                  <div className="achievement-actions">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-btn"
                    >
                      <Award size={15} />
                      <span>View Official Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>

              {item.certificateImg && (
                <div className="achievement-visual">
                  <a
                    href={item.certificateUrl || item.certificateImg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-preview-card"
                    title="Click to view full certificate"
                  >
                    <div className="certificate-img-wrapper">
                      <img
                        src={item.certificateImg}
                        alt={`${item.title} Certificate`}
                        className="certificate-thumbnail"
                        loading="lazy"
                      />
                      <div className="certificate-overlay">
                        <span className="overlay-pill">
                          <ExternalLink size={15} />
                          <span>Expand Certificate</span>
                        </span>
                      </div>
                    </div>
                    <div className="certificate-caption">
                      <span className="caption-text">Smart India Hackathon Certificate</span>
                      <span className="caption-sub">Click to view authentic document</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

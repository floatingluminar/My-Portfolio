import { Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section className="section" id="academics">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 03</span>
            <span className="section-divider">/</span>
            <span className="section-label">Academic Foundations</span>
          </div>
          <h2 className="section-title">Education &amp; Credentials</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-spine" />

          <div className="timeline-nodes">
            {educationData.map((edu, i) => (
              <div key={i} className="timeline-item fade-up">
                {/* Gold Circular Marker */}
                <div className="timeline-marker">
                  <div className="marker-core" />
                </div>

                <div className="education-card glass-card">
                  <div className="edu-top-row">
                    <div className="edu-main-info">
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <div className="edu-meta">
                        <span className="edu-meta-item">
                          <MapPin size={13} className="meta-icon" />
                          {edu.institution}, {edu.location}
                        </span>
                        <span className="edu-meta-item period-tag">
                          <Calendar size={13} className="meta-icon" />
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <div className="edu-badges">
                      {edu.grade && <span className="edu-grade-badge">{edu.grade}</span>}
                      <span className="edu-status-badge">{edu.status}</span>
                    </div>
                  </div>

                  {edu.description && <p className="edu-description">{edu.description}</p>}

                  {edu.coursework && (
                    <div className="edu-coursework">
                      <span className="coursework-label">
                        <BookOpen size={13} />
                        Core Disciplines &amp; Coursework:
                      </span>
                      <div className="coursework-tags">
                        {edu.coursework.map((course, j) => (
                          <span key={j} className="coursework-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

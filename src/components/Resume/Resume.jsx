import { FileText, Download, ExternalLink, Languages, Trophy, CheckCircle2 } from 'lucide-react';
import { resumeData, personalInfo } from '../../data/portfolioData';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 08</span>
            <span className="section-divider">/</span>
            <span className="section-label">Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Professional Dossier</h2>
          <p className="section-subtitle">
            Comprehensive overview of engineering experience, verified credentials, and competencies.
          </p>
          <br />
          <br />
        </div>

        <div className="resume-grid">
          {/* Summary & Details Card */}
          <div className="resume-info-card glass-card fade-up">
            <div className="resume-header">
              <div className="resume-icon-badge">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="resume-name">{personalInfo.name}</h3>
                <p className="resume-title">{personalInfo.title}</p>
              </div>
            </div>

            <div className="resume-summary-block">
              <h4 className="resume-subheading">Executive Summary</h4>
              <p className="resume-summary-text">{resumeData.summary}</p>
            </div>

            <div className="resume-highlights-grid">
              {resumeData.highlights.map((item, i) => (
                <div key={i} className="resume-highlight-item">
                  <CheckCircle2 size={15} className="resume-check-icon" />
                  <div>
                    <span className="highlight-tag">{item.label}</span>
                    <strong className="highlight-val">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements & Languages */}
            <div className="resume-meta-row">
              <div className="resume-meta-box">
                <div className="meta-box-header">
                  <Trophy size={15} />
                  <span>Key Achievements</span>
                </div>
                <ul className="meta-list">
                  {resumeData.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>

              <div className="resume-meta-box">
                <div className="meta-box-header">
                  <Languages size={15} />
                  <span>Languages Known</span>
                </div>
                <div className="language-tags">
                  {resumeData.languages.map((lang, i) => (
                    <span key={i} className="language-tag">{lang}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="resume-actions">
              <a
                href={resumeData.fileUrl}
                download="GARGI.resume.pdf"
                className="btn-primary"
              >
                <Download size={15} />
                Download Resume (PDF)
              </a>
              <a
                href={resumeData.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={15} />
                Preview Full Screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

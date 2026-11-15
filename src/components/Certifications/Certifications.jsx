import { Award, Trophy, BookOpen, Briefcase, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';
import { AwsLogo, CiscoLogo, GoogleCloudLogo } from '../common/BrandIcons';
import './Certifications.css';

const typeIcons = {
  internship: <Briefcase size={22} />,
  certification: <Award size={22} />,
  hackathon: <Trophy size={22} />,
  workshop: <BookOpen size={22} />,
};

const brandLogos = {
  aws: <AwsLogo size={36} />,
  cisco: <CiscoLogo size={36} />,
  googlecloud: <GoogleCloudLogo size={34} />,
};

const typeLabels = {
  internship: 'Industrial Training & Internship',
  certification: 'Certification',
  hackathon: 'Hackathon',
  workshop: 'Workshop',
};

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 06</span>
            <span className="section-divider">/</span>
            <span className="section-label">Industry Training &amp; Badges</span>
          </div>
          <h2 className="section-title">Credentials &amp; Certifications</h2>
          <p className="section-subtitle">
            Industry-validated proficiencies in cloud engineering, networking, and emerging AI technologies.
          </p>
          <br />
          <br />
        </div>

        <div className="certs-grid">
          {certificationsData.map((cert, i) => (
            <div
              key={i}
              className={`cert-card glass-card fade-up ${cert.featured ? 'featured-cert' : ''}`}
            >
              <div className="cert-top">
                <div className="cert-badge">
                  {cert.brand && brandLogos[cert.brand] ? (
                    brandLogos[cert.brand]
                  ) : cert.badgeImg && cert.type !== 'hackathon' ? (
                    <img src={cert.badgeImg} alt={cert.title} className="cert-badge-img" />
                  ) : (
                    typeIcons[cert.type] || <Award size={22} />
                  )}
                </div>
                <div className="cert-type-tag">{typeLabels[cert.type]}</div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              {cert.instructor && (
                <p className="cert-instructor">Instructor: {cert.instructor}</p>
              )}

              {cert.credentialId && (
                <div className="cert-ref">
                  <ShieldCheck size={14} className="cert-ref-icon" />
                  <span>Ref: {cert.credentialId}</span>
                </div>
              )}

              <p className="cert-description">{cert.description}</p>

              {cert.skills && (
                <div className="cert-skills">
                  {cert.skills.map((skill, j) => (
                    <span key={j} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>
              )}

              <div className="cert-footer">
                <span className="cert-date">
                  <Calendar size={13} />
                  {cert.date}
                </span>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={13} />
                  </a>
                ) : cert.badgeImg ? (
                  <a
                    href={cert.badgeImg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    <span>View Badge</span>
                    <ExternalLink size={13} />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

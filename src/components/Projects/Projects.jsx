import { ExternalLink, Folder } from 'lucide-react';
import { Github } from '../common/BrandIcons';
import { projectsData } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 05</span>
            <span className="section-divider">/</span>
            <span className="section-label">Selected Portfolio</span>
          </div>
          <h2 className="section-title">Featured Works &amp; Systems</h2>
          <p className="section-subtitle">
            Engineered with modern architecture, resilient databases, and meticulous interface design.
          </p>
          <br />
          <br />
        </div>

        <div className="projects-grid">
          {projectsData.map((project, i) => {
            const isCompleted =
              project.status === 'Completed' ||
              project.status.includes('Tested') ||
              project.status.includes('Deployed');
            const showLiveDemo = isCompleted && Boolean(project.live);
            const projectNumber = `N° 0${i + 1}`;

            return (
              <div
                key={i}
                className={`project-card glass-card fade-up ${project.featured ? 'featured-card' : ''}`}
              >
                {/* Decorative corner accents */}
                <div className="card-corner tl" />
                <div className="card-corner br" />

                <div className="project-top-bar">
                  <div className="project-editorial-num">
                    <span className="num-text">{projectNumber}</span>
                    <span className="num-dot" />
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <Github size={17} />
                      </a>
                    )}
                    {showLiveDemo && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        aria-label="Tested &amp; Deployed"
                        title="Tested &amp; Deployed"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-title-area">
                  <div className="title-row">
                    <Folder size={22} className="project-folder" />
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  {project.status && (
                    <span
                      className={`project-status-pill ${
                        project.status.includes('Ongoing')
                          ? 'ongoing'
                          : project.status.includes('Deployed') || project.status.includes('Tested')
                          ? 'deployed'
                          : ''
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-card-footer">
                  <div className="project-tech-tags">
                    {project.techStack.map((tech, j) => (
                      <span key={j} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="project-action-buttons">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-atelier code-btn"
                        title="View Source Code"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {showLiveDemo && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-atelier demo-btn"
                        title="Tested &amp; Deployed"
                      >
                        <ExternalLink size={14} />
                        <span>Tested &amp; Deployed</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

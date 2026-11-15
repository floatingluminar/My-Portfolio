import { useState } from 'react';
import { Send, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../common/BrandIcons';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="fade-up section-header-editorial">
          <div className="section-meta-row">
            <span className="section-number">N° 09</span>
            <span className="section-divider">/</span>
            <span className="section-label">Inquiries &amp; Dialogue</span>
          </div>
          <h2 className="section-title">Let&apos;s Create Something Meaningful.</h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, an opportunity, or a creative idea to explore — my inbox is always open.
          </p>
          <br />
          <br />
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-up">
            <div className="contact-editorial-intro">
              <p className="contact-text">
                I&apos;m constantly keen to collaborate on software engineering initiatives, cloud infrastructure projects, or innovative tech solutions. Reach out directly or send a message through the form.
              </p>
            </div>

            <div className="contact-links">
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="contact-link-card glass-card"
                >
                  <div className="contact-link-icon">
                    <Phone size={18} />
                  </div>
                  <div className="contact-link-info">
                    <span className="contact-link-label">Direct Line</span>
                    <span className="contact-link-value">{personalInfo.phone}</span>
                  </div>
                  <ArrowUpRight size={16} className="contact-link-arrow" />
                </a>
              )}

              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-link-card glass-card"
              >
                <div className="contact-link-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">Electronic Mail</span>
                  <span className="contact-link-value">{personalInfo.email}</span>
                </div>
                <ArrowUpRight size={16} className="contact-link-arrow" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card glass-card"
              >
                <div className="contact-link-icon">
                  <Github size={18} />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">{personalInfo.githubUsername || 'floatingluminar'}</span>
                </div>
                <ArrowUpRight size={16} className="contact-link-arrow" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card glass-card"
              >
                <div className="contact-link-icon">
                  <Linkedin size={18} />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">{personalInfo.linkedinUsername || 'gargi--sarkar'}</span>
                </div>
                <ArrowUpRight size={16} className="contact-link-arrow" />
              </a>

              {personalInfo.instagram && (
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card glass-card"
                >
                  <div className="contact-link-icon">
                    <Instagram size={18} />
                  </div>
                  <div className="contact-link-info">
                    <span className="contact-link-label">Instagram</span>
                    <span className="contact-link-value">@{personalInfo.instagramUsername || 'floating_luminar'}</span>
                  </div>
                  <ArrowUpRight size={16} className="contact-link-arrow" />
                </a>
              )}
            </div>
          </div>

          <form className="contact-form glass-card fade-up" onSubmit={handleSubmit}>
            <div className="form-card-header">
              <span className="form-eyebrow">Transmission Form</span>
              <h3 className="form-title">Send a Direct Message</h3>
            </div>

            {submitted && (
              <div className="form-success">
                <span>✓</span> Message sent successfully! I will get back to you shortly.
              </div>
            )}

            <div className={`form-group ${errors.name ? 'error' : ''}`}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Eleanor Vance"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@domain.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.message ? 'error' : ''}`}>
              <label htmlFor="message">Message &amp; Inquiry</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please describe your project, proposal, or thoughts..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="form-submit">
              <Send size={15} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

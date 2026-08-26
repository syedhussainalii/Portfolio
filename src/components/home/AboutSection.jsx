import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { heroProfile } from '../../data/hero'
import {
  aboutHighlights,
  aboutIntro,
  aboutProfile,
  aboutStats,
} from '../../data/about'

function AboutSection() {
  return (
    <section className="page-section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-shell">
          <div className="about-grid">
            <article className="about-profile-card">
              <div className="about-profile-copy">
                <h3 className="about-profile-name">{aboutProfile.name}</h3>
                <p className="about-profile-role">
                  {aboutProfile.roleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>

              <div className="about-availability" aria-label={aboutProfile.availability}>
                <span className="about-status-dot" aria-hidden="true" />
                <span>{aboutProfile.availability}</span>
              </div>

              <p className="about-profile-bio">{aboutProfile.bio}</p>

              <div className="about-stats-grid">
                {aboutStats.map((stat) => {
                  const StatIcon = stat.icon

                  return (
                    <div key={stat.label} className="about-stat-card">
                      <span className="about-stat-icon" aria-hidden="true">
                        <StatIcon />
                      </span>
                      <strong className="about-stat-value">{stat.value}</strong>
                      <span className="about-stat-label">{stat.label}</span>
                    </div>
                  )
                })}
              </div>

              <div className="about-card-footer">
                <a
                  className="about-button about-button-outline"
                  href={heroProfile.resumeUrl}
                  download={heroProfile.resumeFilename}
                >
                  <FiDownload aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </article>

            <div className="about-editorial">
              <p className="about-accent">{aboutIntro.eyebrow}</p>
              <p className="about-editorial-label">About Me</p>
              <h2 className="about-editorial-title" id="about-title">
                <span>Building Modern</span>
                <span>Digital Experiences</span>
                <span>
                  with <em>{aboutIntro.highlight}</em>
                </span>
              </h2>

              <div className="about-editorial-copy">
                {aboutIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="about-editorial-chips" aria-label="Quick facts">
                {aboutHighlights.map((highlight) => {
                  const HighlightIcon = highlight.icon

                  return (
                    <span
                      key={highlight.label}
                      className={`about-chip${highlight.spanFull ? ' about-chip--wide' : ''}`}
                    >
                      <HighlightIcon aria-hidden="true" />
                      <span>{highlight.label}</span>
                    </span>
                  )
                })}
              </div>

              <div className="about-editorial-actions">
                <a className="about-button about-button-primary" href="#portfolio">
                  View Projects
                  <FiArrowRight aria-hidden="true" />
                </a>
                <a
                  className="about-button about-button-secondary"
                  href={heroProfile.resumeUrl}
                  download={heroProfile.resumeFilename}
                >
                  <FiDownload aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

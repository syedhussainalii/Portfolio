import { heroProfile } from '../../data/hero'

function HeroContent({ currentWord }) {
  return (
    <div className="hero-copy">
      <p className="hero-eyebrow">{heroProfile.greeting}</p>
      <h1 className="hero-title" id="hero-title">
        {heroProfile.name}
      </h1>
      <div className="hero-role" aria-live="polite" aria-atomic="true">
        <span className="hero-role-label">I build</span>
        <span key={currentWord} className="hero-role-word">
          {currentWord}
        </span>
      </div>
      <div className="hero-actions">
        <a className="hero-button hero-button-primary" href="#portfolio">
          View Projects
        </a>
        <a className="hero-button hero-button-secondary" href={heroProfile.resumeUrl} download={heroProfile.resumeFilename}>
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default HeroContent

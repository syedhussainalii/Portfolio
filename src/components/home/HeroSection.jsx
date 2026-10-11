import { useEffect, useState } from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

function HeroSection({ heroWords }) {
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setActiveWordIndex((currentIndex) => (currentIndex + 1) % heroWords.length)
    }, 2200)

    return () => window.clearInterval(wordTimer)
  }, [heroWords.length])

  return (
    <section
      id="home"
      className="home-area hero-section"
      aria-labelledby="hero-title"
    >
      <div className="hero-background" aria-hidden="true">
        <span className="hero-glow hero-glow-one" />
        <span className="hero-glow hero-glow-two" />
        <span className="hero-noise" />
      </div>

      <div className="container hero-shell">
        <div className="row align-items-center hero-grid">
          <div className="col-12 col-lg-6 hero-copy-column">
            <HeroContent currentWord={heroWords[activeWordIndex]} />
          </div>
          <div className="col-12 col-lg-6 hero-visual-column">
            <HeroImage />
          </div>  
        </div>
      </div>
    </section>
  )
}

export default HeroSection

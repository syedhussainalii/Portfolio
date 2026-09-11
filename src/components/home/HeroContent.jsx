import { motion, useReducedMotion } from 'framer-motion'
import { heroProfile } from '../../data/hero'
import MagneticButton from '../ui/MagneticButton'

function HeroContent({ currentWord }) {
  const shouldReduceMotion = useReducedMotion()
  const nameWords = heroProfile.name.split(' ')

  const titleVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : '0.7em' },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.22 + index * 0.11,
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <div className="hero-copy">
      <motion.p
        className="hero-eyebrow"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
      >
        {heroProfile.greeting}
      </motion.p>
      <h1 className="hero-title" id="hero-title" aria-label={heroProfile.name}>
        {nameWords.map((word, index) => (
          <span className="hero-title-word" key={word} aria-hidden="true">
            <motion.span
              className={index === nameWords.length - 1 ? 'hero-title-accent' : ''}
              custom={index}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.div
        className="hero-role"
        aria-live="polite"
        aria-atomic="true"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.65, duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <span className="hero-role-label">I build</span>
        <span key={currentWord} className="hero-role-word">
          {currentWord}
        </span>
      </motion.div>
      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.78, duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <MagneticButton className="hero-button hero-button-primary" href="#portfolio">
          View Projects
        </MagneticButton>
        <MagneticButton className="hero-button hero-button-secondary" href={heroProfile.resumeUrl} download={heroProfile.resumeFilename}>
          Download Resume
        </MagneticButton>
      </motion.div>
    </div>
  )
}

export default HeroContent

import logo from '../../assets/logo/logo.png'
import { motion, useReducedMotion } from 'framer-motion'
import { footerCopyright, footerCredit, footerLinks, footerTagline } from '../../data/footer'
import { Reveal } from '../ui/Reveal'

function Footer() {
  const shouldReduceMotion = useReducedMotion()
  return (
    <footer className="footer-area" aria-label="Site footer">
      <div className="container">
        <Reveal><div className="footer-content">
          <div className="footer-top">
            <a href="#home" className="footer-logo" aria-label="Go to home section">
              <img className="img-fluid" src={logo} alt="Hussain Logo" />
            </a>
            <p className="footer-tagline">{footerTagline}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <motion.a key={link.label} href={link.href} className="footer-nav-link" whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.05 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}>
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="footer-bottom">
            <p className="footer-copyright">{footerCopyright}</p>
            <p className="footer-credit">{footerCredit}</p>
          </div>
        </div></Reveal>
      </div>
    </footer>
  )
}

export default Footer

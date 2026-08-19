import logo from '../../assets/logo/logo.png'
import { footerCopyright, footerCredit, footerLinks, footerTagline } from '../../data/footer'

function Footer() {
  return (
    <footer className="footer-area" aria-label="Site footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <a href="#home" className="footer-logo" aria-label="Go to home section">
              <img className="img-fluid" src={logo} alt="Hussain Logo" />
            </a>
            <p className="footer-tagline">{footerTagline}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-bottom">
            <p className="footer-copyright">{footerCopyright}</p>
            <p className="footer-credit">{footerCredit}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

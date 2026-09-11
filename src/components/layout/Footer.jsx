import logo from '../../assets/logo/logo.png'
import { footerCopyright, footerTagline } from '../../data/footer'
import { Reveal } from '../ui/Reveal'

function Footer() {
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

          <div className="footer-bottom">
            <p className="footer-copyright">{footerCopyright}</p>
          </div>
        </div></Reveal>
      </div>
    </footer>
  )
}

export default Footer

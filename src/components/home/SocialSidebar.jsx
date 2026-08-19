function SocialSidebar({ languageItems, socialLinks }) {
  return (
    <div className="fixed-wrapper">
      <div className="fixed-block block-left">
        <ul className="list-unstyled languages-list" aria-label="Language options">
          {languageItems.map((language) => (
            <li key={language}>
              <a href="#0" aria-label={language === 'ENG' ? 'English' : 'Japanese'}>
                <span className="single-language">{language}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed-block block-right">
        <ul className="list-unstyled social-icons" aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} aria-label={link.label}>
                <i className={`icon ${link.iconClass}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SocialSidebar

import { useEffect, useState, useCallback } from "react";
import logo from "../../assets/logo/logo.png";

function Navbar({ navigationItems, isMenuOpen, onToggleMenu, onCloseMenu }) {
  const [scrolled, setScrolled] = useState(false);

  /* ============================
      Navbar Scroll Effect
  ============================ */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================
      ESC closes drawer
  ============================ */

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onCloseMenu();
      }
    },
    [onCloseMenu],
  );

  /* ============================
      Lock Body Scroll
  ============================ */

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, handleKeyDown]);

  /* ============================
      Close Menu
  ============================ */

  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <>
      {/* ==========================================
                  NAVBAR
      ========================================== */}

      <header className={`navbar ${scrolled ? "scrolled" : ""}`} role="banner">
        {/* ================= Logo ================= */}

        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Hussain Logo" />
        </a>

        {/* ============== Desktop Links ============== */}

        <nav className="navbar-desktop" aria-label="Primary Navigation">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ============== Mobile Button ============== */}

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          aria-label="Toggle Navigation"
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ==========================================
                BACKDROP
      ========================================== */}

      <div
        className={`menu-backdrop ${isMenuOpen ? "show" : ""}`}
        onClick={onCloseMenu}
      />

      {/* ==========================================
                MOBILE DRAWER
      ========================================== */}

      <aside className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <nav className="drawer-nav">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="drawer-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Navbar;

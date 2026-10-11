import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import logo from "../../assets/logo/logo.png";

function Navbar({
  navigationItems,
  isMenuOpen,
  isProjectModalOpen,
  onToggleMenu,
  onCloseMenu,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState(null);

  /* ============================
      Navbar Scroll Effect
  ============================ */

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextScrolled = window.scrollY > 40;
          if (nextScrolled !== lastScrolled) {
            lastScrolled = nextScrolled;
            setScrolled(nextScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================
      Scroll Spy / Active Section
  ============================ */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );

    navigationItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigationItems]);

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

      <header
        className={`navbar ${scrolled ? "scrolled" : ""}${isProjectModalOpen ? " navbar--project-modal-open" : ""}`}
        role="banner"
      >
        {/* ================= Logo ================= */}

        <motion.a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("home");
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
              });
            }
            handleLinkClick();
          }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        >
          <img src={logo} alt="Hussain Logo" />
        </motion.a>

        {/* ============== Desktop Links ============== */}

        <nav className="navbar-desktop" aria-label="Primary Navigation">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`navbar-link ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                  handleLinkClick();
                }}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="nav-indicator active"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hoverIndicator"
                    className="nav-indicator hover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </nav>

        {/* ============== Mobile Button ============== */}

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          aria-label="Toggle Navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
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

      <aside
        id="mobile-navigation"
        className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
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

import { useState, useEffect } from "react";
import { personalInfo, navigationLinks } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { FaFileDownload, FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navigationLinks.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleLinkClick = (e, targetHref) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.querySelector(targetHref);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="navbar-brand"
        >
          <div className="brand-badge">OM</div>
          <div className="brand-text">
            <span>Oliver</span>
            <span className="brand-dot">.dev</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Navegación principal">
          {navigationLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
                {isActive && <span className="active-pill" />}
              </a>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="navbar-actions">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={personalInfo.cvUrl}
            download={personalInfo.cvFileName}
            className="nav-cv-btn"
          >
            <FaFileDownload />
            <span>CV</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          {navigationLinks.map((link, idx) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <span className="mobile-link-index">0{idx + 1}.</span>
                <span>{link.label}</span>
              </a>
            );
          })}

          <div className="mobile-nav-footer">
            <a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFileName}
              className="btn-primary"
              style={{ width: "100%" }}
            >
              <FaFileDownload />
              <span>Descargar Currículum</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { personalInfo, navigationLinks } from "../../data/portfolioData";
import {
  FaArrowUp,
  FaHeart,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaClock
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [limaTime, setLimaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("es-PE", {
          timeZone: "America/Lima",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setLimaTime(formatted);
      } catch (e) {
        setLimaTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="portfolio-container footer-container">
        
        {/* Top Row: Brand & Live Peru Time */}
        <div className="footer-top">
          <div className="footer-brand-info">
            <div className="footer-logo">
              <span className="footer-logo-badge">OM</span>
              <span className="footer-logo-text">Oliver Mendez</span>
            </div>
            <p className="footer-tagline">
              Frontend Developer enfocado en experiencias interactivas modernas, código limpio y diseño centrado en el usuario.
            </p>
          </div>

          <div className="footer-time-card glass-panel">
            <div className="time-card-header">
              <FaClock className="clock-icon" />
              <span>Hora Local (Lima, PE)</span>
            </div>
            <div className="time-display">{limaTime || "--:--:--"}</div>
            <span className="time-status-pill">🇵🇪 UTC-5</span>
          </div>
        </div>

        {/* Middle Row: Links & Socials */}
        <div className="footer-middle">
          <nav className="footer-nav-links" aria-label="Navegación del pie de página">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-nav-item">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social-icons">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn wasap"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={personalInfo.socials.email}
              className="footer-social-btn"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Scroll to Top */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Oliver Mendez. Diseñado y programado con{" "}
            <FaHeart className="heart-icon" /> desde Lima, Perú.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Volver al inicio"
          >
            <span>Volver arriba</span>
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

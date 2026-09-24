import { useState, useEffect } from "react";
import { personalInfo } from "../../data/portfolioData";
import {
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaReact,
  FaJsSquare
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import "./hero.css";

const roles = [
  "Frontend Developer",
  "Especialista en React",
  "Backend Developer",
  "JavaScript Lover"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for role titles
  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="portfolio-container hero-container">
        
        {/* Left Column: Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="radar-dot animate-pulse-radar" />
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Titles */}
          <div className="hero-titles">
            <span className="hero-greeting">¡Hola a todos! 👋</span>
            <h1 className="hero-name">
              Yo soy <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <div className="hero-role-wrapper">
              <span className="hero-role-prefix">&gt;</span>
              <span className="hero-role-text">{displayText}</span>
              <span className="hero-cursor">|</span>
            </div>
          </div>

          {/* Elevator Pitch */}
          <p className="hero-description">
            {personalInfo.bioShort} Apasionado por construir experiencias web
            cinematográficas, código limpio y soluciones intuitivas que superen
            expectativas de reclutadores y usuarios.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>Explorar Proyectos</span>
              <FaArrowRight />
            </a>
            <a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFileName}
              className="btn-secondary"
            >
              <FaFileDownload />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Conéctate:</span>
            <div className="socials-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={personalInfo.socials.email}
                className="hero-social-btn"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="hero-showcase">
          <div className="hero-avatar-wrapper">
            {/* Ambient Background Glow behind profile */}
            <div className="avatar-ambient-glow" />

            {/* Rotating Conic Gradient Border Frame */}
            <div className="avatar-conic-frame">
              <div className="avatar-inner-glow">
                <img
                  src="/img/Perfil.webp"
                  alt={`Foto de perfil de ${personalInfo.name}`}
                  className="avatar-image"
                  width="400"
                  height="400"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react animate-float">
              <FaReact style={{ color: "#61DAFB", fontSize: "1.4rem" }} />
              <span>React 18</span>
            </div>

            <div className="floating-badge badge-js animate-float-delayed">
              <FaJsSquare style={{ color: "#F7DF1E", fontSize: "1.4rem" }} />
              <span>JavaScript</span>
            </div>

            <div className="floating-badge badge-redux animate-float">
              <SiRedux style={{ color: "#764ABC", fontSize: "1.3rem" }} />
              <span>Redux State</span>
            </div>

            {/* Location Pill */}
            <div className="avatar-location-pill">
              <span className="flag-icon">🇵🇪</span>
              <span>Lima, Perú</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Scroll Down Cue */}
      <a href="#about" className="hero-scroll-cue" aria-label="Ir a la siguiente sección">
        <div className="mouse-icon">
          <div className="mouse-wheel" />
        </div>
        <span className="scroll-text">Scrollear</span>
      </a>
    </section>
  );
};

export default Hero;

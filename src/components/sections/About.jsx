import { personalInfo } from "../../data/portfolioData";
import { FaGraduationCap, FaCode, FaHeart, FaQuoteLeft } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaCode />
            <span>Trayectoria & Perfil</span>
          </div>
          <h2 className="section-title">
            Pasión por la <span className="gradient-text">Excelencia Digital</span>
          </h2>
          <p className="section-subtitle">
            Un vistazo a mi mentalidad, experiencia práctica y el motor que impulsa cada línea de código que escribo.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <span className="stat-value gradient-text">{stat.value}</span>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Storytelling & Illustration Row */}
        <div className="about-main-grid">
          {/* Left: Bio Narrative */}
          <div className="about-narrative glass-panel">
            <div className="narrative-badge">
              <FaGraduationCap />
              <span>Mi Enfoque</span>
            </div>

            <div className="narrative-paragraphs">
              {personalInfo.bioLong.map((paragraph, index) => (
                <p key={index} className="narrative-p">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Hobbies / Interests */}
            <div className="about-hobbies-section">
              <h4 className="hobbies-title">
                <FaHeart style={{ color: "#F43F5E" }} />
                <span>Intereses & Estilo de Vida</span>
              </h4>
              <div className="hobbies-chips">
                {personalInfo.interests.map((item, idx) => (
                  <div key={idx} className="hobby-chip">
                    <span className="hobby-icon">{item.icon}</span>
                    <span className="hobby-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Graphic Showcase & Quote */}
          <div className="about-visual-column">
            {/* Visual illustration with glass frame */}
            <div className="about-image-card glass-panel">
              <div className="image-card-glow" />
              <img
                src="/img/aboutme.png"
                alt="Oliver Mendez Programando"
                className="about-illustration"
                loading="lazy"
              />
            </div>

            {/* Motivational Quote Card */}
            <div className="quote-card glass-panel">
              <FaQuoteLeft className="quote-icon" />
              <p className="quote-text">"{personalInfo.quote}"</p>
              <div className="quote-author">
                <span className="author-line" />
                <span className="author-name">{personalInfo.quoteAuthor}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

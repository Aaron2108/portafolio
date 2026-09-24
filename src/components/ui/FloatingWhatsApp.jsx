import { personalInfo } from "../../data/portfolioData";
import { FaWhatsapp } from "react-icons/fa";
import "./floatingWhatsApp.css";

const FloatingWhatsApp = () => {
  return (
    <a
      href={personalInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wasap-btn"
      aria-label="Contactar por WhatsApp"
    >
      <div className="wasap-btn-inner">
        <FaWhatsapp className="wasap-btn-icon" />
        <span className="wasap-online-badge animate-pulse-radar" />
      </div>
      <span className="wasap-tooltip">¿Conversamos? Escríbeme</span>
    </a>
  );
};

export default FloatingWhatsApp;

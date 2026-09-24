import { useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaCheck,
  FaCopy
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjvnkwva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaPaperPlane />
            <span>Contacto Directo</span>
          </div>
          <h2 className="section-title">
            ¿Iniciamos una <span className="gradient-text">Conversación?</span>
          </h2>
          <p className="section-subtitle">
            Si buscas un desarrollador Frontend comprometido para tu equipo o deseas consultar sobre un proyecto, mi bandeja está abierta.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            
            {/* WhatsApp Card */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-panel whatsapp-card"
            >
              <div className="contact-card-icon wasap-icon-glow">
                <FaWhatsapp />
              </div>
              <div className="contact-card-text">
                <span className="card-mini-label">Respuesta rápida</span>
                <h3 className="card-main-title">WhatsApp Directo</h3>
                <p className="card-sub-info">{personalInfo.phone}</p>
              </div>
              <span className="card-action-indicator">Escribir ↗</span>
            </a>

            {/* Email Card with Quick Copy */}
            <div className="contact-card glass-panel email-card">
              <div className="contact-card-icon email-icon-glow">
                <FaEnvelope />
              </div>
              <div className="contact-card-text">
                <span className="card-mini-label">Correo electrónico</span>
                <h3 className="card-main-title">{personalInfo.email}</h3>
                <p className="card-sub-info">Disponible para oportunidades laborales</p>
              </div>
              <button
                type="button"
                className="copy-email-btn"
                onClick={handleCopyEmail}
                aria-label="Copiar correo electrónico"
              >
                {copied ? <FaCheck style={{ color: "#10B981" }} /> : <FaCopy />}
                <span>{copied ? "Copiado" : "Copiar"}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card glass-panel location-card">
              <div className="contact-card-icon location-icon-glow">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-card-text">
                <span className="card-mini-label">Ubicación</span>
                <h3 className="card-main-title">{personalInfo.location}</h3>
                <p className="card-sub-info">Modalidad: Remoto / Presencial / Híbrido</p>
              </div>
            </div>

            {/* Professional Network Links */}
            <div className="contact-socials-box glass-panel">
              <h4 className="socials-box-title">Perfiles Profesionales</h4>
              <div className="socials-box-links">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-box-btn linkedin"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-box-btn github"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-panel">
              <h3 className="form-card-title">Envíame un Mensaje</h3>
              <p className="form-card-subtitle">
                Completa este formulario y te responderé a la brevedad.
              </p>

              {submitted ? (
                <div className="form-success-banner">
                  <div className="success-icon">
                    <FaCheck />
                  </div>
                  <h4>¡Mensaje Recibido!</h4>
                  <p>Muchas gracias por contactarme. Te responderé en breve a tu correo.</p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: "1rem" }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="modern-contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Tu Nombre <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Mendoza"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Tu Correo <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="nombre@empresa.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Asunto o Propuesta <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Ej. Oportunidad Frontend Developer"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Mensaje <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre el puesto, proyecto o requerimientos..."
                      className="form-input form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

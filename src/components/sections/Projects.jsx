import { useState } from "react";
import { projectsData } from "../../data/portfolioData";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaFolderOpen,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";
import "./projects.css";

const projectFilters = [
  { key: "all", label: "Todos (7)" },
  { key: "featured", label: "Destacados ⭐" },
  { key: "react", label: "React Apps" },
  { key: "vanilla", label: "Vanilla JavaScript" }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaFolderOpen />
            <span>Casos Prácticos & Demos</span>
          </div>
          <h2 className="section-title">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Una selección de aplicaciones web interactivas desarrolladas con código limpio, arquitectura de componentes y consumo de APIs en tiempo real.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-wrapper">
          <div className="projects-filter-bar">
            {projectFilters.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`project-tab-btn ${activeFilter === tab.key ? "active" : ""}`}
                onClick={() => setActiveFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-panel">
              {/* Media Preview Box */}
              <div className="project-media-wrapper">
                <img
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  className="project-image"
                  loading="lazy"
                />

                {/* Floating Featured Badge */}
                {project.featured && (
                  <div className="project-featured-badge">
                    <FaStar />
                    <span>Featured</span>
                  </div>
                )}

                {/* Interactive Action Overlay */}
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn demo-btn"
                      aria-label={`Ver demo en vivo de ${project.title}`}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn code-btn"
                      aria-label={`Ver repositorio GitHub de ${project.title}`}
                    >
                      <FaGithub />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-body">
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                {/* Highlights List */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <FaCheckCircle className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies Badges */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mobile / Direct Action Bar */}
                <div className="project-card-actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-btn primary"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-btn secondary"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

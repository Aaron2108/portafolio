import { useState } from "react";
import { skillsData } from "../../data/portfolioData";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaLayerGroup
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiVisualstudiocode
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./skills.css";

const iconMap = {
  react: FaReact,
  javascript: FaJsSquare,
  redux: SiRedux,
  html5: FaHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  nodejs: FaNodeJs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  git: FaGitAlt,
  vscode: SiVisualstudiocode,
  api: TbApi
};

const categories = [
  { key: "all", label: "Todas las Tecnologías" },
  { key: "frontend", label: "Frontend Core" },
  { key: "backend", label: "Backend & Datos" },
  { key: "tools", label: "Herramientas & Flujo" }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaLayerGroup />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="section-title">
            Habilidades & <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="section-subtitle">
            Conjunto de herramientas modernas que domino para construir aplicaciones web eficientes, reactivas y visualmente impactantes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconKey] || FaDatabase;

            return (
              <div
                key={skill.name}
                className="skill-card glass-panel"
                style={{ "--tech-color": skill.color }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">
                    <IconComponent className="skill-tech-icon" style={{ color: skill.color }} />
                  </div>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>

                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.description}</p>
                </div>

                <div className="skill-card-bar">
                  <div
                    className="skill-bar-progress"
                    style={{
                      backgroundColor: skill.color,
                      width:
                        skill.level === "Avanzado"
                          ? "90%"
                          : skill.level === "Intermedio"
                          ? "75%"
                          : "55%"
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;

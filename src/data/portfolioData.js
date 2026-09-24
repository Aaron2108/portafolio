export const personalInfo = {
  name: "Oliver Mendez",
  title: "Frontend Developer",
  status: "Disponible para nuevas oportunidades",
  location: "Lima, Perú",
  email: "mendezoliver2108@gmail.com",
  phone: "+51 900 900 306",
  whatsappUrl: "https://api.whatsapp.com/send?phone=51900900306&text=Hola%20Oliver,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.",
  cvUrl: "/dowload/OliverMendezCVATS.pdf",
  cvFileName: "OliverMendezCVATS.pdf",
  bioShort: "Desarrollador Frontend especializado en el ecosistema React, JavaScript moderno y diseño de interfaces interactivas de alto impacto.",
  bioLong: [
    "¡Hola! Soy Oliver Mendez, desarrollador Frontend ubicado en Lima, Perú. Me apasiona transformar ideas y prototipos complejos en interfaces web dinámicas, cinematográficas, intuitivas y responsivas.",
    "Cuento con una sólida base técnica construida con JavaScript moderno (ES6+), React, Redux, TailwindCSS y consumo e integración de APIs REST con servicios backend. Mi enfoque combina código limpio, arquitectura escalable y soluciones orientadas al rendimiento y la seguridad.",
    "Estoy enfocado en sumarme a un equipo innovador donde pueda aportar valor inmediato, colaborar con ingenieros experimentados y seguir creciendo como profesional tech."
  ],
  quote: "La vida es una sucesión constante de oportunidades. No se trata solo de reconocerlas, sino de tener el coraje de aprovecharlas cuando se presentan.",
  quoteAuthor: "Jack Canfield",
  stats: [
    { label: "Proyectos Realizados", value: "7+", detail: "Full responsive & deployed" },
    { label: "Tecnologías Clave", value: "12+", detail: "Stack moderno Frontend & Tools" },
    { label: "Compromiso & Dedicación", value: "100%", detail: "Orientado a resultados" }
  ],
  interests: [
    { label: "Fútbol", icon: "⚽" },
    { label: "Lectura Tech", icon: "📚" },
    { label: "Calistenia & Fitness", icon: "🏋️‍♂️" },
    { label: "Videojuegos", icon: "🎮" },
    { label: "Música & Lo-Fi", icon: "🎵" },
    { label: "Viajes", icon: "✈️" }
  ],
  socials: {
    github: "https://github.com/Aaron2108",
    linkedin: "https://www.linkedin.com/in/oliver-mendez2108/",
    instagram: "https://www.instagram.com/oliver_21m/",
    email: "mailto:mendezoliver2108@gmail.com"
  }
};

export const skillsData = [
  {
    category: "frontend",
    name: "React.js",
    level: "Avanzado",
    iconKey: "react",
    color: "#61DAFB",
    description: "Componentes funcionales, Hooks personalizados, Estado, Context API"
  },
  {
    category: "frontend",
    name: "JavaScript (ES6+)",
    level: "Avanzado",
    iconKey: "javascript",
    color: "#F7DF1E",
    description: "Async/Await, Promesas, DOM manipulation, Clean Code"
  },
  {
    category: "frontend",
    name: "Redux / Redux Toolkit",
    level: "Intermedio",
    iconKey: "redux",
    color: "#764ABC",
    description: "Gestión global de estado, Slices, Async Thunks"
  },
  {
    category: "frontend",
    name: "HTML5 Semántico",
    level: "Avanzado",
    iconKey: "html5",
    color: "#E34F26",
    description: "Accesibilidad (a11y), estructura SEO, buenas prácticas web"
  },
  {
    category: "frontend",
    name: "CSS3 & Modern Layouts",
    level: "Avanzado",
    iconKey: "css3",
    color: "#1572B6",
    description: "Flexbox, Grid, Animaciones clave, Glassmorphism, Responsive"
  },
  {
    category: "frontend",
    name: "Tailwind CSS",
    level: "Intermedio",
    iconKey: "tailwind",
    color: "#06B6D4",
    description: "Diseño modular utilitario, Dark mode, Micro-interacciones"
  },
  {
    category: "backend",
    name: "Node.js",
    level: "Básico - Intermedio",
    iconKey: "nodejs",
    color: "#339933",
    description: "Entorno de ejecución servidor, NPM, scripts y automatización"
  },
  {
    category: "backend",
    name: "Express.js",
    level: "Básico - Intermedio",
    iconKey: "express",
    color: "#FFFFFF",
    description: "Creación y consumo de RESTful APIs, middlewares"
  },
  {
    category: "backend",
    name: "PostgreSQL",
    level: "Básico",
    iconKey: "postgresql",
    color: "#4169E1",
    description: "Bases de datos relacionales, consultas SQL estructuradas"
  },
  {
    category: "backend",
    name: "MongoDB",
    level: "Básico",
    iconKey: "mongodb",
    color: "#47A248",
    description: "Bases de datos NoSQL, esquemas y colecciones"
  },
  {
    category: "tools",
    name: "Git & GitHub",
    level: "Avanzado",
    iconKey: "git",
    color: "#F05032",
    description: "Control de versiones, ramas, commits semánticos, colaboración"
  },
  {
    category: "tools",
    name: "VS Code",
    level: "Avanzado",
    iconKey: "vscode",
    color: "#007ACC",
    description: "Configuraciones, plugins de productividad, depuración"
  },
  {
    category: "tools",
    name: "APIs & Axios",
    level: "Avanzado",
    iconKey: "api",
    color: "#8B5CF6",
    description: "Integración de endpoints, manejo de errores, interceptores"
  }
];

export const projectsData = [
  {
    id: "pokedex",
    title: "Pokédex Pro",
    tagline: "Explorador Pokémon con estadísticas avanzadas y filtros por tipo",
    description: "Aplicación interactiva conectada a la PokéAPI que permite buscar pokémons, ver estadísticas en tiempo real, filtrar por tipo, habilidades y gestionar favoritos con persistencia.",
    image: "/img/pokedexProject.png",
    technologies: ["React", "Redux", "JavaScript", "CSS3", "PokéAPI"],
    category: "react",
    featured: true,
    githubUrl: "https://github.com/Aaron2108/pokedex",
    demoUrl: "https://pokedex-aaron2108.vercel.app/",
    highlights: ["Manejo global de estado con Redux", "Paginación dinámica y búsqueda instantánea", "UI estilizada con diseño responsive"]
  },
  {
    id: "rick-and-morty",
    title: "Rick & Morty Multiverse",
    tagline: "Explorador de dimensiones y personajes con búsqueda reactiva",
    description: "Portal que consume la API oficial de Rick & Morty. Incluye búsqueda en vivo por ID de locación, paginación fluida de residentes y tarjetas dinámicas con estados de vida.",
    image: "/img/rick-and-morty.png",
    technologies: ["React", "JavaScript", "REST API", "CSS3"],
    category: "react",
    featured: true,
    githubUrl: "https://github.com/Aaron2108/rick-and-morty",
    demoUrl: "https://rick-morty-aaron2108.vercel.app/",
    highlights: ["Consumo asíncrono de API en tiempo real", "Diseño temático inmersivo", "Paginación y filtrado reactivo"]
  },
  {
    id: "clima-api",
    title: "Weather Station App",
    tagline: "App meteorológica con geolocalización y cambio dinámico °C / °F",
    description: "Aplicación meteorológica que detecta la ubicación geográfica del usuario para entregar datos en tiempo real: temperatura, humedad, presión atmosférica y estado del cielo.",
    image: "/img/clima-api.png",
    technologies: ["React", "OpenWeather API", "GeoLocation", "CSS3"],
    category: "react",
    featured: true,
    githubUrl: "https://github.com/Aaron2108/Entregable2/tree/main",
    demoUrl: "https://entregable2-aaron2108.vercel.app/",
    highlights: ["Geolocalización en navegador", "Conversión instantánea Celsius/Fahrenheit", "Fondos adaptativos según clima"]
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Cinematic",
    tagline: "El clásico juego de mesa reinventado con efectos y control de turnos",
    description: "Implementación moderna del juego Tres en Raya en React, con lógica de detección de victorias, empate, turnos alternos y almacenamiento en LocalStorage para reiniciar partidas.",
    image: "/img/tic-tac-to.jpeg",
    technologies: ["React", "JavaScript", "LocalStorage", "CSS3"],
    category: "react",
    featured: false,
    githubUrl: "https://github.com/Aaron2108/tic-tac-toe/tree/main",
    demoUrl: "https://tic-tac-toe-seven-flame-26.vercel.app/",
    highlights: ["Algoritmo de cálculo de ganador", "Persistencia de estado", "Microinteracciones fluidas"]
  },
  {
    id: "presupuesto-app",
    title: "Control Financiero & Presupuesto",
    tagline: "Gestor de finanzas personales para cálculo de ingresos y egresos",
    description: "Herramienta financiera intuitiva para llevar control minucioso del balance personal. Permite agregar movimientos clasificados por concepto con actualización automática de saldos.",
    image: "/img/presupuestoApp.png",
    technologies: ["JavaScript ES6", "HTML5", "CSS Grid/Flexbox"],
    category: "vanilla",
    featured: false,
    githubUrl: "https://github.com/Aaron2108/presupuestoApp",
    demoUrl: "https://presupuesto-app-sand.vercel.app/",
    highlights: ["Lógica pura en Vanilla JS", "Cálculo matemático en tiempo real", "Diseño intuitivo sin dependencias pesadas"]
  },
  {
    id: "reloj-digital",
    title: "Reloj Digital & Calendario",
    tagline: "Reloj digital sincronizado en tiempo real con fecha dinámica",
    description: "Aplicación de tiempo real que despliega hora, minutos, segundos en formato estándar y fecha local completa con actualización por segundo precisa.",
    image: "/img/relojDigital.png",
    technologies: ["JavaScript", "HTML5", "CSS3 Keyframes"],
    category: "vanilla",
    featured: false,
    githubUrl: "https://github.com/Aaron2108/RelojDigital/tree/main",
    demoUrl: "https://reloj-digital-five.vercel.app/",
    highlights: ["Event loops y sincronización de intervalos", "Efecto display digital luminoso", "Adaptado a pantallas móviles y desktop"]
  },
  {
    id: "cookies-random",
    title: "Fortune Cookies Express",
    tagline: "Generador interactivo de frases y galletas de la fortuna",
    description: "Divertida aplicación interactiva que genera galletas de la fortuna aleatorias con frases inspiradoras y fondos que cambian armónicamente en cada clic.",
    image: "/img/cookies-random.png",
    technologies: ["React", "Hooks (useState)", "CSS Transitions"],
    category: "react",
    featured: false,
    githubUrl: "https://github.com/Aaron2108/entregable1/tree/main",
    demoUrl: "https://entregable1-aaron2108.vercel.app/",
    highlights: ["Selección aleatoria ponderada", "Transiciones dinámicas de paleta", "Interacción lúdica inmediata"]
  }
];

export const navigationLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" }
];

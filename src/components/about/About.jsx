import 'boxicons'
import './about.css'
const About = ({dark}) => {
  return (
    <div>
      <section className='section_aboutMe'>

        <article className={`article_aboutMe ${dark === true ? 'article_aboutMe_Dark' : ''}`}>
          <h1 className='title_aboutMe'>Acerca de mi</h1>
            <p className='presentacion'>Hola a todos, soy <span className='spn'>Oliver Mendez</span> de <span className='spn'>Lima</span>, <span className='spn'>Perú</span>.<br />
            Soy Front-end Junior Developer. 
            </p>
            <p className='presentacion'>Además de codificar, ¡hay otras actividades que me encanta hacer!</p>

              <ul className='lista_actividades'>
                <li>⚽Futbol⚽</li>
                <li>📚Leer📚</li>
                <li>🏋️‍♀️Calistenia🏋️‍♀️</li>
                <li>🎮Videojuegos🎮</li>
                <li>🎵Escuchar Musica🎵</li>
                <li>✈️Viajar✈️</li>
              </ul>
        </article>

        <article className='img_AboutMe'>
        <img src="/img/aboutme.png" alt="" />
        </article>

        <article className='article_frase'>
        <p className={`frase ${dark === true ? 'frase_dark' : ''}`}>"La vida es una sucesión constante de oportunidades. No se trata solo de reconocerlas, sino de tener el coraje de aprovecharlas cuando se presentan."
        <h2 className='frase_autor'>-Jack Canfield</h2>
        </p>
        
        </article>

      </section>

      <h1 className='title_tenologia'>Tecnologias Profesionales</h1>
        <section className='section_tecnologias'>

            <div className='div_Tecnologia'><box-icon name='html5' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='css3' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='javascript' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='react' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='typescript' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='nodejs' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='visual-studio' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='postgresql' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='mongodb' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='github' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='git' type='logo' color='#ffffff' ></box-icon></div>
            <div className='div_Tecnologia'><box-icon name='tailwind-css' type='logo' color='#faf5f5' ></box-icon></div>
        </section>

        <h3 className='conexion'>¡No dudes en conectarte conmigo!</h3>
          <div className='container_conexiones'>
            <div className="icon_circle">
              <a href="https://www.linkedin.com/in/oliver-mendez2108/" target="_blank">
                <box-icon name='linkedin' type='logo' color='#0000cf'></box-icon>
              </a>
            </div>

            <div className="icon_circle">
              <a href="https://github.com/Aaron2108?tab=overview&from=2023-11-01&to=2023-11-15" target="_blank">
              <box-icon name='github' type='logo' color='#0000cf' ></box-icon>
              </a>
              </div>

            <div className="icon_circle">
              <a href="https://www.instagram.com/oliver_21m/?hl=es-la" target="_blank">
              <box-icon name='instagram' type='logo' color='#0000cf' ></box-icon>
              </a>
              </div>
          </div>
    </div>
  )
}
export default About
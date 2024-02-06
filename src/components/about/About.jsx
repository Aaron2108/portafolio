import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiLogoMongodb, BiLogoPostgresql, BiLogoRedux, BiLogoTailwindCss, BiLogoVisualStudio} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { faCss3, faGitAlt, faGithub, faHtml5, faInstagram, faJs, faLinkedinIn, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = ({dark}) => {
  AOS.init({
    offset: 100,
    duration:600
  })
  return (
    <div>
      <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className='section_aboutMe'>

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

        <article data-aos="fade-up-right" className='article_frase'>
        <p className={`frase ${dark === true ? 'frase_dark' : ''}`}>"La vida es una sucesión constante de oportunidades. No se trata solo de reconocerlas, sino de tener el coraje de aprovecharlas cuando se presentan."
        </p>
        <h2 className='frase_autor'>-Jack Canfield</h2>
        
        </article>

      </section>

      <h1 className='title_tenologia'>Tecnologias Profesionales</h1>
        <section className='section_tecnologias'>

            <div data-aos="zoom-in" className='div_Tecnologia'>
              <FontAwesomeIcon icon={faHtml5} style={{fontSize: '80px'}}/>
            </div>
            
            <div data-aos="zoom-in-up" className='div_Tecnologia'>
              <FontAwesomeIcon icon={faCss3} style={{fontSize: '80px'}}/>
            </div>
            
            <div data-aos="zoom-in" className='div_Tecnologia'>
              <FontAwesomeIcon icon={faJs} style={{fontSize: '80px'}}/>
            </div>

            <div data-aos="zoom-in-up" className='div_Tecnologia'>
              <FontAwesomeIcon icon={faReact} style={{fontSize: '80px'}}/>
            </div>
            
            <div data-aos="zoom-in" className='div_Tecnologia'>
              <BiLogoRedux style={{fontSize: '80px'}}/>
            </div>

            <div data-aos="zoom-in-up" className='div_Tecnologia'>
              <SiExpress style={{fontSize: '80px'}}/>
            </div>

            <div data-aos="zoom-in" className='div_Tecnologia'>
              <FontAwesomeIcon icon={faNodeJs} style={{fontSize: '80px'}}/>
            </div>

            <div data-aos="zoom-in-up" className='div_Tecnologia'>
              <BiLogoVisualStudio style={{fontSize: '80px'}}/>
            </div>

            <div data-aos="zoom-in" className='div_Tecnologia'>
            <BiLogoPostgresql style={{fontSize: '80px'}} />

            </div>

            <div data-aos="zoom-in-up" className='div_Tecnologia'>
            <BiLogoMongodb style={{fontSize: '80px'}} />
            </div>

            <div data-aos="zoom-in" className='div_Tecnologia'>
              <FontAwesomeIcon icon={faGithub} style={{fontSize: '80px'}}/> 
            </div>

            <div data-aos="zoom-in-up"  className='div_Tecnologia'>
              <FontAwesomeIcon icon={faGitAlt} style={{fontSize: '80px'}}/> 
            </div>

            <div data-aos="zoom-in" className='div_Tecnologia'>
              <BiLogoTailwindCss style={{fontSize: '80px'}}/>
            </div>
        </section>

        
        <article data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="redes">
      <h3>¡No dudes en conectarte conmigo!</h3>
      <div>
        <div className="icon_circle">
          <a href="https://www.linkedin.com/in/oliver-mendez2108/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#0a0a0a" }} />
          </a>
        </div>

        <div className="icon_circle">
          <a href="https://github.com/Aaron2108?tab=overview&from=2023-11-01&to=2023-11-15" target="_blank">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#0a0a0a" }} />
          </a>
          </div>

        <div className="icon_circle">
          <a href="https://www.instagram.com/oliver_21m/?hl=es-la" target="_blank">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#0a0a0a" }} />
          </a>
          </div>
      </div>
    </article>
    </div>
  )
}
export default About
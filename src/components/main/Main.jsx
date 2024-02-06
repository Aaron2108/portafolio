import "./main.css"
import AboutPage from '../../pages/AboutPage'
import ProjectsPage from '../../pages/ProjectsPage'
import ContactPage from '../../pages/ContactPage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import flechaUp from "../../utils/flechaUp"


const Main = ({dark}) => {
  return (
    <><main className='main_home' id="up">
    <section  className="inicio darkInicio">
        <article  className={`texto_inicio ${dark === true ? 'inicio_dark' : ''}`}>
            <h1 className="saludo">¡Hola! <span>👋</span> </h1>
            <h2>Yo Soy<span className="nombre">OLIVER MENDEZ</span></h2>
            <span className="span_animado">Front-end Developer</span>
            <div className='div_cv'>
              <button className={`button_cv ${dark === true ? 'buttoncv_dark' : ''}`}>
              <a className={`${dark === true ? 'a_dark' : ''}`} href="./dowload/OliverCvP.pdf" download>
              Descargar CV
              </a>
              </button>
            </div>
        </article>
        <div className="imagen_inicio">
            <img src="/img/programador.png" alt="programador_png" />
        </div>
    </section>

    <section data-aos="zoom-in" className="introduccion_container">
     <div  className={`introduccion ${dark === true ? 'introduccion_dark': ''}`}>
     <h1 className={`titulo_intro ${dark === true ? 'titulo_dark': ''}`}>Apasionado Aspirante a Desarrollador <span className="spn_titulo">Front-end 🥳</span></h1>
      <p className={`parrafo_intro ${dark === true ? 'parrafo_dark': ''}`}>Mi nombre es <b>Oliver</b>, un entusiasta aspirante a <span className="spn_intro">Desarrollador Front-end</span>, emocionado por la oportunidad de formar parte de un equipo en alguna empresa. Aunque soy un <b>junior, mi dedicación y pasión por la programación me convierten en un candidato comprometido y dispuesto a aprender.</b></p>
     </div>

     <div className="imagen">
      <img src="/img/home_perfil.png" alt="" />
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
</main>
    <AboutPage/>
    <ProjectsPage/>
    <ContactPage/>
    <div className="circle_flechaUp" id="up"  onClick={flechaUp} >
       <FontAwesomeIcon icon={faArrowCircleUp} fontSize={50}/>
    </div>
    </>
  )
}
export default Main
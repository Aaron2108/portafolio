import 'boxicons'
import "./main.css"
const Main = ({dark}) => {
  return (
    <main className='main_home'>
        <section className="inicio darkInicio">
            <article className={`texto_inicio ${dark === true ? 'inicio_dark' : ''}`}>
                <h1 className="saludo">¡Hola! <span>👋</span> </h1>
                <h2>Yo Soy<span className="nombre">OLIVER MENDEZ</span></h2>
                <span className="span_animado">Front-end Developer</span>
                <div className='div_cv'>
                  <button className={`button_cv ${dark === true ? 'buttoncv_dark' : ''}`}>
                  <a className={`${dark === true ? 'a_dark' : ''}`} href="./dowload/OliverCv.pdf" download>
                  Descargar CV
                  </a>
                  </button>
                </div>
            </article>
            <div className="imagen_inicio">
                <img src="/img/programador.png" alt="programador_png" />
            </div>
        </section>

        <section className="introduccion_container">
         <div className={`introduccion ${dark === true ? 'introduccion_dark': ''}`}>
         <h1 className={`titulo_intro ${dark === true ? 'titulo_dark': ''}`}>Apasionado Aspirante a Desarrollador <span className="spn_titulo">Front-end 🥳</span></h1>
          <p className={`parrafo_intro ${dark === true ? 'parrafo_dark': ''}`}>Mi nombre es <b>Oliver</b>, un entusiasta aspirante a <span className="spn_intro">Desarrollador Front-end</span>, emocionado por la oportunidad de formar parte de un equipo en alguna empresa. Aunque soy un <b>junior, mi dedicación y pasión por la programación me convierten en un candidato comprometido y dispuesto a aprender.</b></p>
         </div>

         <div className="imagen">
          <img src="/img/home_perfil.png" alt="" />
         </div>
        </section>

        <article className="redes">
          <h3>¡No dudes en conectarte conmigo!</h3>
          <div>
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
        </article>
    </main>
  )
}
export default Main
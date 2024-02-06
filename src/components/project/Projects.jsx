import './project.css'
const Projects = () => {
  return (
    <div>
        <header data-aos="fade-up"
    data-aos-anchor-placement="center-bottom" className='header_project'>
          <h1 className='title_header'>Mis Proyectos</h1>
          <p className='description_header'>Si puedes imaginarlo puedes programarlo.</p>
        </header>

        {/* Pokedex */}

        <section className='section_projects'>

          <article data-aos="zoom-in"  className='article_projects'>
            <div  className='container_img'>
              <img src="/img/pokedexProject.png" alt="" />
            </div>
            <h2 className='projects_title'>
              Pokedex
            </h2>

            <p className='description_projects'>
            Esta aplicación ofrece datos como habilidades y estadísticas. Los entrenadores la utilizan para registrar y conocer mejor a sus Pokémon.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
                <box-icon name='react' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='redux' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>
            </article>

            <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/pokedex" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://pokedex-aaron2108.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>


          {/* TIC-TAC-TOE */}

          <article  data-aos="zoom-in-up" className='article_projects'>
            <div className='container_img'>
              <img src="/img/tic-tac-to.jpeg" alt="" />
            </div>
            <h2 className='projects_title'>
            TIC-TAC-TOE
            </h2>

            <p className='description_projects'>
            Sumérgete en la clásica diversión del juego de Tic Tac Toe con esta emocionante versión digital.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
                <box-icon name='react' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>
            </article>

          <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/tic-tac-toe/tree/main" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://tic-tac-toe-seven-flame-26.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>

            {/* Rick-Morty */}

          <article data-aos="zoom-in" className='article_projects'>
            <div className='container_img'>
              <img src="/img/rick-and-morty.png" alt="" />
            </div>
            <h2 className='projects_title'>
            Rick and Morty
            </h2>

            <p className='description_projects'>
            Esta aplicación trae información de la API a través del input, también agregue una paginación para los cards.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
                <box-icon name='react' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>
            </article>

          <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/rick-and-morty" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://rick-morty-aaron2108.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>

          {/* Clima Api */}

          <article data-aos="zoom-in-up" className='article_projects'>
            <div className='container_img'>
              <img src="/img/clima-api.png" alt="" />
            </div>
            <h2 className='projects_title'>
              Clima-API
            </h2>

            <p className='description_projects'>
            Esta aplicación da información del clima del lugar en que se encuentre, con una función que cambia de C/F.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
                <box-icon name='react' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>
            </article>

            <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/Entregable2/tree/main" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://entregable2-aaron2108.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>

          {/*Presupuesto App*/}

          <article data-aos="zoom-in"  className='article_projects'>
            <div className='container_img'>
              <img src="/img/presupuestoApp.png" alt="" />
            </div>
            <h2 className='projects_title'>
              Presupuesto-App
            </h2>

            <p className='description_projects'>
            Esta aplicación te permite calcular tus ingresos y egresos para poder llevar un buen control financiero.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>
            </article>

            <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/presupuestoApp" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://presupuesto-app-sand.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>

            {/*Reloj Digital*/}

            <article data-aos="zoom-in-up"  className='article_projects'>
            <div className='container_img'>
              <img src="/img/relojDigital.png" alt="" />
            </div>
            <h2 className='projects_title'>
              Reloj Digital
            </h2>

            <p className='description_projects'>
            Esta aplicación te da la hora y fecha de donde te encuentres.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

            </article>

            <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/RelojDigital/tree/main" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://reloj-digital-five.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>

            {/* Cookies-random */}

          <article data-aos="zoom-in"  className='article_projects'>
            <div className='container_img'>
              <img src="/img/cookies-random.png" alt="" />
            </div>
            <h2 className='projects_title'>
              Galleta de la Fortuna
            </h2>

            <p className='description_projects'>
            Esta aplicación trae frase de su API y tiene una función de frases aleatorio.
            </p>

            <article className='skills_pokedex'>
              <div className='div_skills'>
              <box-icon name='html5' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='css3' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
              <box-icon name='javascript' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>

              <div className='div_skills'>
                <box-icon name='react' type='logo' color='#f4ebeb' size='30px' ></box-icon>
              </div>
            </article>

            <div className='container_button'>
            <button className='button_projects'>
              <a className='a_buttom' href="https://github.com/Aaron2108/entregable1/tree/main" target='blank'>GitHub</a>
            </button>

            <button className='button_projects'>
              <a className='a_buttom' href="https://entregable1-aaron2108.vercel.app/" target='blank'>Demo</a>
            </button>
          </div>

          </article>

          
        </section>
    </div>
  )
}
export default Projects
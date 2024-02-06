import './contact.css'
const Contact = () => {
  return (
    <div>
        <section data-aos="zoom-in"  className='section_contact'>

          <article  className='article_form'>
          <h1 className='title_form'>Contactame</h1>

          <form className='formulario' action="https://formspree.io/f/mjvnkwva  " method='POST'>
              <div className='div_form'>
              <label  className='label_form' htmlFor=""   >Nombre</label>
              <input className='input_form' type="text" name='nombre'/> <br/>
              </div>

              <div className='div_form'>
              <label  className='label_form' htmlFor="">Telefono</label>
              <input className='input_form' type="number" name='telefono' />
              </div>

              <div className='div_form'>
              <label  className='label_form' htmlFor="">Correo</label>
              <input className='input_form' type="email" name='email' />
              </div>

              <div className='div_form'>
              <label  className='label_form'>Tema</label>
              <input className='input_form' type="text" name='tema' />
              </div>

              <div className='div_form mensaje'>
              <label  className='label_form' htmlFor="">Mensaje</label>
              <textarea className='input_form mensaje' name="mensaje" id="" cols="30" rows="10"></textarea>
              </div>
              
              <button className='button_form' type='submit'>Enviar</button>
            </form>
          </article>

          <article className='article_form2'>
            <h2 className='title_article2'>MÁS INFORMACIÓN</h2>
            <ul className='ul_form'>
              <li>Lima, Peru</li>
              <li>+51 900900306</li>
              <li>mendezoliver2108@gmail.com</li>
            </ul>
            <p className='p_article2'>
            ¡Gracias por ponerte en contacto! Por favor, completa el formulario a continuación, y me pondre en contacto contigo lo antes posible. Tu opinión es importante para mi.
            </p>
          </article>

        </section>
    </div>
  )
}
export default Contact
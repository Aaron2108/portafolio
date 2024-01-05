import './redes.css'
const Redes = () => {
  return (
    <>
    <article className='article_redes'>
        <div className='icon_linked'>
        <a href='https://www.linkedin.com/in/oliver-mendez2108/' target='blank'>Linkedin</a>    
        <box-icon name='linkedin-square' 
        type='logo' 
        color='#f4f6f8'
        size='35px'
        ></box-icon>
        </div>

        <div className='icon_github'>
        <a href='https://github.com/Aaron2108' target='blank'>GitHub</a>
        <box-icon 
        name='github' 
        type='logo' 
        color='#f4f6f8' 
        size='35px'
        ></box-icon>
        </div>

        <div className='icon_gmail'>
        <a href='mailto:mendezoliver2108@gmail.com'>Email</a>
        <box-icon 
        name='gmail' 
        type='logo' 
        color='#f4f6f8' 
        size='35px'
        ></box-icon>
        </div>
    </article>

    <article>
    <div className='icon_wasap'>
        <a href="https://api.whatsapp.com/send?phone=902361067" target='blank'>
          <div className='div_img'>
          <img src="/img/whatsapp.png" alt="" />
          </div>
        </a>
        </div>
    </article>
    </>
  )
}
export default Redes
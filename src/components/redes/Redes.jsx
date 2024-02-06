import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './redes.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Redes = () => {
  return (
    <>
    <article className='article_redes'>
        <div className='icon_linked'>
        <a href='https://www.linkedin.com/in/oliver-mendez2108/' target='blank'>Linkedin</a>    
        <FontAwesomeIcon icon={faLinkedinIn} 
        style={
        {color:'#f4f6f8',
        fontSize:'30px'}}/>
        </div>

        <div className='icon_github'>
        <a href='https://github.com/Aaron2108' target='blank'>GitHub</a>
        <FontAwesomeIcon icon={faGithub} 
        style={
        {color:'#f4f6f8',
        fontSize:'30px'}}/>
        </div>

        <div className='icon_gmail'>
        <a href='mailto:mendezoliver2108@gmail.com'>Email</a>
        <FontAwesomeIcon icon={faEnvelope} 
        style={
        {color:'#f4f6f8',
        fontSize:'30px'}}/>
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
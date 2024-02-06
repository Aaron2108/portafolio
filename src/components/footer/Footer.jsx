import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../footer/footer.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className="footer">
        <div>
        <h3>Designed and Developed by Oliver Mendez</h3>
        </div>

        <div>
            <h3>Copyright ©</h3>
        </div>

        <div>
        <a href="https://www.linkedin.com/in/oliver-mendez2108/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} 
        style={
        {color:'#f4f6f8',
        fontSize:'20px'}}/>
        </a>

        <a href="https://github.com/Aaron2108?tab=overview&from=2023-11-01&to=2023-11-15" target="_blank">
        <FontAwesomeIcon icon={faGithub} 
        style={
        {color:'#f4f6f8',
        fontSize:'20px'}}/>
        </a>
        
        <a href='mailto:mendezoliver2108@gmail.com'><FontAwesomeIcon icon={faEnvelope} 
        style={
        {color:'#f4f6f8',
        fontSize:'20'}}/></a>
        </div>
    </footer>
  )
}
export default Footer
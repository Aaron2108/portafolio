import '../footer/footer.css'
import 'boxicons'
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
                <box-icon name='linkedin' type='logo' color='#f0f0fa'></box-icon>
        </a>

        <a href="https://github.com/Aaron2108?tab=overview&from=2023-11-01&to=2023-11-15" target="_blank">
            <box-icon name='github' type='logo' color='#f0f0fa' ></box-icon>
        </a>
        
        <a href="https://www.instagram.com/oliver_21m/?hl=es-la" target="_blank">
            <box-icon name='instagram' type='logo' color='#f0f0fa' ></box-icon>
        </a>
        
        </div>
    </footer>
  )
}
export default Footer
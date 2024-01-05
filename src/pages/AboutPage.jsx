import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Redes from "../components/redes/Redes"
const AboutPage = ({dark}) => {
  return (
    <div>
      <Redes/>
        <About dark={dark}/>
        <Footer/>
    </div>
  )
}
export default AboutPage
import About from "../components/about/About"
import Redes from "../components/redes/Redes"
const AboutPage = ({dark}) => {
  return (
    <div>
      <Redes/>
        <About dark={dark}/>
    </div>
  )
}
export default AboutPage
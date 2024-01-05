import Footer from "../components/footer/Footer"
import Main from "../components/main/Main"
import Redes from "../components/redes/Redes"

const HomePage = ({ dark}) => {
  return (
    <div>
        <Redes/>
        <Main dark={dark} />
        <Footer/>
    </div>
  )
}
export default HomePage
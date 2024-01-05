import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

const NavBarPage = ({setDark, dark}) => {
  return (
    <div>
        <Header setDark={setDark} dark={dark}/>
        <Outlet/>
    </div>
  )
}
export default NavBarPage
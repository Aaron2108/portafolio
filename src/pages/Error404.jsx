import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div>
    <h3>❌esta ruta no existe❌</h3>
    <Link to='/'>Ir a la Home</Link>
</div>
  )
}
export default Error404
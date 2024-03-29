import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfid from "./config/particles-config"


const ParticlesBackground = () => {
    
    const particlesInit = useCallback((engine) =>{
        loadFull(engine)
    }, [])

  return (
    <div>
    <Particles
    id="tsparticles"
    options={particlesConfid}
    init={particlesInit}
    />
    </div>
  )
}
export default ParticlesBackground
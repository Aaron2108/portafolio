import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import ParticlesBackground from './components/particlesBG/ParticlesBackground';
import NavBarPage from './pages/NavBarPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Error404 from './pages/Error404';
import './components/footer/footer.css'
import './utils/scrollHeader'
import { useState } from 'react';


function App() {
    const [dark, setDark] = useState(false)
  return (
    <>
    <Analytics />

    <div>    

      {/*Rutas */}
      <ParticlesBackground/>

      <Routes>
  
        <Route element={<NavBarPage setDark={setDark} dark={dark}/>}>
        <Route path='/' element={<HomePage dark={dark}/>}  />
        <Route path='/about' element={<AboutPage dark={dark}/>}  />
        <Route path='/projects' element={<ProjectsPage dark={dark}/>}  />
        <Route path='/contact' element={<ContactPage  dark={dark}/>}  />
        <Route path='*' element={<Error404/>} />

        </Route>
      </Routes>
      
    </div>
    </>
  )
}

export default App

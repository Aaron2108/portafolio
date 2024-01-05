import 'boxicons'
import './header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({setDark, dark}) => {

  const [HeaderClick, setHeaderClick] = useState(false);

  const handleHeader = ()=>{
    setHeaderClick(!HeaderClick);
  }

  const handleDark = (e) =>{
    e.preventDefault
    setDark(!dark)
    console.log(dark);
  }

  return (
    <>
    <header id={`${HeaderClick === false ? 'headerRemote' : ''}`} className={`headerClass ${HeaderClick === true ? 'header' : ''} ${dark === true ? 'darkM' : ''}`}>
      <nav className='nav'>
        <ul id='ul' className='listas'>
          <li>
          <box-icon name='home' type='solid' color={`${dark === true ? '#131313': '#ffffff'}`} ></box-icon>
            <a className='a_header' href="Home"><Link className={`${dark === true ? 'darka' : ''}`} to='/'>Home</Link></a>
          </li>

          <li>
          <box-icon name='user' color={`${dark === true ? '#131313': '#ffffff'}`} ></box-icon>
            <a className='a_header' href="/About"><Link to='/about' className={`${dark === true ? 'darka' : ''}`}>About</Link></a>
          </li>

          <li>
          <box-icon name='briefcase-alt-2' type='solid' color={`${dark === true ? '#131313': '#ffffff'}`} ></box-icon>
          <a className='a_header' href="Projects"><Link to='/projects' className={`${dark === true ? 'darka' : ''}`}>Projects</Link></a>
          </li>

          <li>
          <box-icon name='contact' type='solid' color={`${dark === true ? '#131313': '#ffffff'}`} ></box-icon>
            <a className='a_header' href="Contact"><Link to='/contact' className={`${dark === true ? 'darka' : ''}`}>Contact</Link></a>
          </li>

          <li>
          <button onClick={handleDark} className='button_dark'><box-icon name='moon' type='solid' color={`${dark === true ? '#131313': '#ffffff' }`} ></box-icon></button>
          </li>
        </ul>
      </nav>
    </header>

    <div className={`container_hambur ${HeaderClick === true ? 'cambio' : ''}`}>
    <button onClick={handleHeader} className="buttom_hambur">
        <div className="div_hambur hambur1"></div>
        <div className="div_hambur hambur2"></div>
        <div className="div_hambur hambur3"></div>
    </button>
    </div>
    </>
    
  )
}
export default Header
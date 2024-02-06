import 'boxicons'
import './header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCircleUser, faHouse, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

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
          <FontAwesomeIcon icon={faHouse} color={`${dark === true ? '#131313': '#ffffff'}`}/>
            <a className='a_header' href="Home"><Link className={`${dark === true ? 'darka' : ''}`} to='/'>Home</Link></a>
          </li>

          <li>
          <FontAwesomeIcon icon={faAddressCard} color={`${dark === true ? '#131313': '#ffffff'}`}/>
            <a className='a_header' href="/About"><Link to='/about' className={`${dark === true ? 'darka' : ''}`}>About</Link></a>
          </li>

          <li>
          <FontAwesomeIcon icon={faBagShopping} color={`${dark === true ? '#131313': '#ffffff'}`}/>
          <a className='a_header' href="Projects"><Link to='/projects' className={`${dark === true ? 'darka' : ''}`}>Projects</Link></a>
          </li>

          <li>
          <FontAwesomeIcon icon={faCircleUser} color={`${dark === true ? '#131313': '#ffffff'}`}  fontSize="18px"/>
            <a className='a_header' href="Contact"><Link to='/contact' className={`${dark === true ? 'darka' : ''}`}>Contact</Link></a>
          </li>

          <li>
          <button onClick={handleDark} className='button_dark'><FontAwesomeIcon icon={faMoon} color={`${dark === true ? '#131313': '#ffffff'}`} fontSize='22px'/></button>
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
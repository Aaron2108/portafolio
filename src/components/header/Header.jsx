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
    <header  id={`${HeaderClick === false ? 'headerRemote' : ''}`} className={`headerClass ${HeaderClick === true ? 'header' : ''} ${dark === true ? 'darkM' : ''}`}>
  <nav className='nav'>
    <ul id='ul' className='listas'>
      <li>
        <FontAwesomeIcon icon={faHouse} color={`${dark === true ? '#131313': '#ffffff'}`}/>
        <Link className={`a_header ${dark === true ? 'darka' : ''}`} to='/'>Home</Link>
      </li>

      <li>
        <FontAwesomeIcon icon={faAddressCard} color={`${dark === true ? '#131313': '#ffffff'}`}/>
        <Link className={`a_header ${dark === true ? 'darka' : ''}`} to='/about'>About</Link>
      </li>

      <li>
        <FontAwesomeIcon icon={faBagShopping} color={`${dark === true ? '#131313': '#ffffff'}`}/>
        <Link className={`a_header ${dark === true ? 'darka' : ''}`} to='/projects'>Projects</Link>
      </li>

      <li>
        <FontAwesomeIcon icon={faCircleUser} color={`${dark === true ? '#131313': '#ffffff'}`} fontSize="18px"/>
        <Link className={`a_header ${dark === true ? 'darka' : ''}`} to='/contact'>Contact</Link>
      </li>

      <li>
        <button onClick={handleDark} className='button_dark'>
          <FontAwesomeIcon icon={faMoon} color={`${dark === true ? '#131313': '#ffffff'}`} fontSize='22px'/>
        </button>
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
import React, {useState} from 'react'
import {Link} from 'react-scroll';
// import logo from '../images/logo1.png'

function Navbar() {

  const[nav, setNav] = useState(false)


  const changeBackground = () => {
    if(window.scrollY >= 50){
      setNav(true)
    }
    else{
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  return (
    <nav className={ nav ? "nav active" : "nav"}>
      <Link to="main" className='logo'>
        {/* <img src={logo} alt=''/> */}
        <h2>4Runners-Bistro</h2>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Menu</Link></li>
        <li><Link to="#">Reservations</Link></li>
        <li><Link to="#">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
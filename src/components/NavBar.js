
import React, {useState} from 'react'
import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";





function NavBar() {
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
                <li> <NavLink to="/"  >  Home </NavLink></li>
                <li> <NavLink to="/menu"   > Menu</NavLink></li>
                <li> <NavLink to="/about"  > About </NavLink></li>
                <li> <NavLink to="/reservation"  > Reservation </NavLink></li>
      </ul>
    </nav>
  )
}
export default NavBar































// import React from "react";
// import { NavLink } from "react-router-dom";

// const linkStyles = {
//     width: "500px",
//     padding: "15px",
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px"
//   };
// function NavBar() {
//     return (

    
//         <nav className="nav-bar">
//             <div className="nav-container">
           
    
//                 <NavLink to="/" style={linkStyles} >  Home </NavLink>
//                 <NavLink to="/menu"  style={linkStyles} > Menu</NavLink>
//                 <NavLink to="/about" style={linkStyles} > About </NavLink>
//                 <NavLink to="/reservation" style={linkStyles} > Reservation </NavLink>


//             </div>
//         </nav>
//     )
// }

// export default NavBar;
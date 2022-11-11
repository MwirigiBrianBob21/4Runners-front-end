import React, {useState} from 'react'
import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);






  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (

    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo"> 
        <h2>4Runners-Bistro</h2>

      </Link>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>

      </label>
      <ul className='menu'>
               <li> <NavLink to="/"  >  Home </NavLink></li>
               <li> <NavLink to="/menu"   > Menu</NavLink></li>
      {/* <Route exact path="/reservation" element={<Reservation/>}></Route> */}
      
               {/* <li> <NavLink to="/about"  > About </NavLink></li> */}
               {/* <li> <NavLink to="/viewreservation"  > Reservation </NavLink></li> */}
                 <li> <NavLink to="/reservation"  > Reservation </NavLink></li>


               <li> <NavLink to="/signup"  > SignUp </NavLink></li>
               <li> <NavLink to="/signin"  > SignIn </NavLink></li>

      </ul>
  
    </nav>    
  )


}

export default Navbar;



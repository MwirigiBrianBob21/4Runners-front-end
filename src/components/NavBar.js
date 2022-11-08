import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    width: "500px",
    padding: "15px",
    textDecoration: "none",
    color: "white",
    fontSize: "20px"
  };
function NavBar() {
    return (

    
        <nav className="nav-bar">
            <div className="nav-container">
           
    
                <NavLink to="/" style={linkStyles} >  Home </NavLink>
                <NavLink to="/menu"  style={linkStyles} > Menu</NavLink>
                <NavLink to="/about" style={linkStyles} > About </NavLink>
                <NavLink to="/reservation" style={linkStyles} > Reservation </NavLink>


            </div>
        </nav>
    )
}

export default NavBar;
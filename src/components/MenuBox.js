import React from "react";
import {useNavigate, useMatch} from 'react-router-dom';

function Menubox(props) {
  const nav = useNavigate()
  // console.log(nav)
  const navigateToMenuCard = () => {
    nav('/MenuCard');
  };


  return (
    <div className="a-box" onClick={navigateToMenuCard}>
      <div className="a-b-img">
        <img src={props.image} alt=""/>
      </div>

      <div className="a-b-text">
        {/* food name */}
        <h2>{props.title}</h2>

        <button className="productbox-button" onClick={navigateToMenuCard}>Details</button>
        <div>{props.price}</div>
        <div>
            {props.availability ? <span>&#129316;</span> : <span>&#128550;</span>}
        </div>
      </div>
      

      
    </div>
  );
}

export default Menubox;

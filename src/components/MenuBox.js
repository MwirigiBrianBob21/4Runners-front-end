import React from "react";
import { useNavigate, Link, useMatch } from "react-router-dom";

import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";

function Menubox(props) {
  // const nav = useMatch()
  // // console.log(nav)
  // const navigateToMenuCard = () => {
  //   nav('/MenuCard');
  // };

  const RELATED_ID = 1;
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>

      <div className="a-b-text">
        {/* food name */}
        <h2>{props.title}</h2>

        {/* {id && RELATED_ID && (
          <Link to={`${pathname}/../${RELATED_ID}`}>
            here
          </Link>
        )} */}
        <button className="productbox-button">Details</button>

        <div>Ksh {props.price}</div>
        <div>
          {props.availability ? <span>&#129316;</span> : <span>&#128550;</span>}
        </div>
      </div>
    </div>
  );
}

export default Menubox;

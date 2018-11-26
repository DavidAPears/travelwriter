import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul className="nav-bar">
    <li>
      <Link to="/">
        <img className="navbar-icon" src="./images/home.svg" alt="home link" width="40" height="40"></img>
      </Link>
    </li>
    <li>
      <Link to="/about">
        <img className="about-icon" src="./images/abouticon.png" alt="about link" width="40" height="40"></img>
      </Link>
    </li>
    <li>
      <Link to="/writing">
        <img className="writing-icon" src="./images/writingicon.svg" alt="writing link" width="40" height="40"></img>
      </Link>
    </li>
    <li>
      <Link to="/map">
        <img className="map-icon" src="./images/map.svg" alt="map link" width="40" height="40"></img>
      </Link>
    </li>
  </ul>
);

export default Navbar;

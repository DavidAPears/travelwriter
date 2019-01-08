import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul className="nav-bar">
    <li>
      <Link to="/">
        <img className="navbar-icon" src="./images/home.png" alt="home link" width="40" height="40"></img>
      </Link>
    </li>
    <li>
      <Link to="/info">
        <img className="navbar-icon" src="./images/info.png" alt="info link" width="40" height="40"></img>
      </Link>
    </li>
  </ul>
);

export default Navbar;

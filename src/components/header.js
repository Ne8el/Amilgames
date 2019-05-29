import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.css";

const Header = () => {
  return (
    <div className="header ">
        <NavLink exact to="/">
        <h3><i className="fas fa-gamepad" /> AmilGames</h3> 
        </NavLink>
    </div>
  );
};

export default Header;

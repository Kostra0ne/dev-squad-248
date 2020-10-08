import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <nav className="NavMain">
      {/* <a href="/">Home</a> */}
      <NavLink exact to="/">
        Home
      </NavLink>
      {/* <a href="/about">About</a> */}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default NavMain;

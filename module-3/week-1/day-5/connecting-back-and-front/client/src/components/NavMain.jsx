import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/friends">
        Your friends
      </NavLink>
      <NavLink exact to="/friends/create">
        Add a friend !
      </NavLink>
    </nav>
  );
};

export default NavMain;

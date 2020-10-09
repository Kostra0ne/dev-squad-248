import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="main">
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

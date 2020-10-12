import React from "react";

import { NavLink } from "react-router-dom";

import withAuth from "../Auth/withAuth";

import "../styles/NavMain.css";

const NavMain = (props) => {
  return (
    <div className="NavMain">
      <h1 className="brand">My App</h1>
      <nav className="nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        {props.authContext.user && (
          <>
            <NavLink exact to="/profile">
              {props.authContext.user.username}
            </NavLink>
            <p
              onClick={props.authContext.logoutUser}
              style={{ display: "inline" }}
            >
              Logout
            </p>
          </>
        )}
        {!props.authContext.user && (
          <>
            <NavLink exact to="/signin">
              Signin
            </NavLink>
            <NavLink exact to="/signup">
              Signup
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default withAuth(NavMain);

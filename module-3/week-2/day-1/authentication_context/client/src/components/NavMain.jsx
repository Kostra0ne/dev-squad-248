import React from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../Auth/AuthContext";

import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <AuthContext.Consumer>
      {(contextValue) => {
        console.log(contextValue);
        return (
          <div className="NavMain">
            <h1 className="brand">My App</h1>
            <nav className="nav">
              <NavLink exact to="/">
                Home
              </NavLink>
              {contextValue.user && (
                <>
                  <NavLink exact to="/profile">
                    {contextValue.user.username}
                  </NavLink>
                  <p
                    onClick={contextValue.logoutUser}
                    style={{ display: "inline" }}
                  >
                    Logout
                  </p>
                </>
              )}
              {!contextValue.user && (
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
      }}
    </AuthContext.Consumer>
  );
};

export default NavMain;

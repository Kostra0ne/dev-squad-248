import React, { Component } from "react";
import { AuthContext } from "./AuthContext";
import apiHandler from "../api/apiHandler";
class AuthProvider extends Component {
  state = {
    user: null,
    error: null,
    isLoading: true,
  };

  componentDidMount() {
    apiHandler
      .isLoggedIn()
      .then((data) => {
        this.setState({ user: data, isLoading: false });
      })
      .catch(() => {
        this.setState({
          user: null,
          error: "There was an error on the authetincation",
          isLoading: false,
        });
      });
  }

  logoutUser = () => {
    apiHandler.logout().then(() => {
      this.setState({ user: null });
    });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser,
          logoutUser: this.logoutUser,
          isLoading: this.state.isLoading,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { AuthContext } from "../Auth/AuthContext";
import "../styles/Form.css";

class Signin extends Component {
  static contextType = AuthContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .signin({
        email: this.state.email,
        password: this.state.password,
      })
      .then((data) => {
        this.context.setUser(data);
      });
  };

  render() {
    console.log(this.context);
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2 className="title">Signin</h2>

        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button className="btn">Submit</button>
        <p>
          Don't have an account yet ?{" "}
          <Link className="link" to="/signup">
            Signin
          </Link>
        </p>
      </form>
    );
  }
}

export default Signin;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import apiHandler from "../api/apiHandler";
import "../styles/Form.css";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    profileImage: "",
    tmpImage: "",
    username: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;

    if (name === "profileImage") {
      const tmpImage = URL.createObjectURL(value);
      this.setState({ tmpImage: tmpImage });
    }
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData();

    fd.append("username", this.state.username);
    fd.append("password", this.state.password);
    fd.append("email", this.state.email);
    fd.append("profileImage", this.state.profileImage);
    console.log(this.state.profileImage);
    apiHandler.signup(fd).then((res) => {
      this.props.history.push("/signin");
    });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2 className="title">Signup</h2>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.tmpImage && (
          <div className="avatar">
            <img src={this.state.tmpImage} alt="avatar" />
          </div>
        )}

        <label className="label" htmlFor="profileImage">
          Select profile image: <FontAwesomeIcon icon={faCogs} />
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            onChange={this.handleChange}
          />
        </label>

        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

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
          Already have an account ?{" "}
          <Link className="link" to="/signin">
            Signin
          </Link>
        </p>
      </form>
    );
  }
}

export default Signup;

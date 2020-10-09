import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withRouter } from "react-router-dom";
import "../styles/Form.css";

class FormFriend extends Component {
  state = {
    name: "",
    profileImage: "",
    age: 20,
    doesCode: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //////////
    apiHandler
      .create("/friends", this.state)
      .then((apiRes) => {
        this.props.history.push("/friends");
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={this.handleChange} />

        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="text"
          name="profileImage"
          id="profileImage"
          onChange={this.handleChange}
        />

        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={this.handleChange} />

        <label htmlFor="doesCode">Does he/she code ?</label>
        <input
          type="checkbox"
          name="doesCode"
          id="doesCode"
          onChange={this.handleChange}
        />

        <button>Submit a friend</button>
      </form>
    );
  }
}

export default withRouter(FormFriend);

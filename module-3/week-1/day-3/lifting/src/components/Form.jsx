import React, { Component } from "react";

import "../styles/Form.css";

class Form extends Component {
  state = {
    username: "",
    profileImage: "",
    age: 20,
  };

  handleChange = (event) => {
    // console.dir(event.target.name);
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);

    // const friendsCopy = [...this.state.friends];
    // friendsCopy.push({
    //   username: this.state.username,
    //   profileImage: this.state.profileImage,
    //   age: this.state.age,
    // });

    this.props.handleAddFriend({
      username: this.state.username,
      profileImage: this.state.profileImage,
      age: this.state.age,
    });

    // Forbidden in react !
    // this.state.friends.push({
    //   username: this.state.username,
    //   profileImage: this.state.profileImage,
    //   age: this.state.age,
    // });

    //  You would post to the backend here...

    // this.setState({
    //   username: "",
    //   profileImage: "",
    //   age: 10,
    //   friends: friendsCopy,
    // });
  };

  // handleAge = (event) => {
  //   this.setState({
  //     age: event.target.value,
  //   });
  // };

  // handleUsername = (event) => {
  //   // console.log(event.target);
  //   console.log("handling username");
  //   this.setState({ username: event.target.value });
  // };

  // handleProfileImage = (event) => {
  //   // console.log(event.target);
  //   console.log("handling image");
  //   this.setState({ profileImage: event.target.value });
  // };

  render() {
    console.log(this.state.friends);
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2 className="title">Add a friend</h2>
        {/* <p>PS: You already have {this.props.friends.length} friends !</p> */}

        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          // onChange={this.handleUsername}
          onChange={this.handleChange}
          value={this.state.username}
          id="username"
          autoComplete="off"
          className="input"
          type="text"
          name="username"
        />

        <label className="label" htmlFor="profileImage">
          Profile image
        </label>
        <input
          id="profileImage"
          autoComplete="off"
          className="input"
          type="text"
          name="profileImage"
          value={this.state.profileImage}
          onChange={this.handleChange}
          // onChange={this.handleProfileImage}
        />

        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          id="age"
          autoComplete="off"
          className="input"
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          // onChange={this.handleAge}
        />

        <button className="button">Submit</button>
      </form>
    );
  }
}

export default Form;

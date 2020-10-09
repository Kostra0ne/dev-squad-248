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
    submitted: false,
  };

  componentDidMount() {
    if (this.props.action === "edit") {
      apiHandler
        .getOne("/friends", this.props.id)
        .then((apiRes) => {
          const friend = apiRes.data;
          this.setState({
            name: friend.name,
            profileImage: friend.profileImage,
            age: friend.age,
            doesCode: friend.doesCode,
          });
        })
        .catch((apiErr) => {
          console.log(apiErr);
        });
    }
  }

  updateFriend = () => {
    apiHandler
      .updateOne("/friends/" + this.props.id, this.state)
      .then(() => {
        this.props.history.push("/friends");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createFriend() {
    const fd = new FormData();

    for (let key in this.state) {
      fd.append(key, this.state[key]);
    }

    // fd.append("name", this.state.name);
    // fd.append("profileImage", this.state.profileImage);
    // fd.append("doesCode", this.state.doesCode);
    // fd.append("age", this.state.age);

    apiHandler
      .create("/friends", fd)
      .then((apiRes) => {
        this.props.history.push("/friends");
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // if (this.props.action === "edit") {
    //   this.updateFriend();
    // } else {
    //   this.createFriend();
    // }
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.type === "file"
        ? event.target.files[0]
        : event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        <label htmlFor="">Name</label>
        <input
          style={{
            border:
              this.state.name.length && this.state.name.length > 5
                ? "1px solid green"
                : "1px solid red",

            outline: "none",
          }}
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="file"
          name="profileImage"
          id="profileImage"
          onChange={this.handleChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={this.state.age}
          onChange={this.handleChange}
        />

        <label htmlFor="doesCode">Does he/she code ?</label>
        <input
          type="checkbox"
          name="doesCode"
          id="doesCode"
          checked={this.state.doesCode}
          onChange={this.handleChange}
        />

        <button>Submit a friend</button>
      </form>
    );
  }
}

export default withRouter(FormFriend);

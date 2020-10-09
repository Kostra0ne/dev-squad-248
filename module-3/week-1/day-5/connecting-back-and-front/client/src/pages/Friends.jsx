import React from "react";
import apiHandler from "../api/apiHandler";

class Friends extends React.Component {
  componentDidMount() {
    apiHandler
      .getAll("/friends")
      .then((apiRes) => {
        console.log(apiRes);
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }

  state = {
    friends: [],
  };
  render() {
    return (
      <div>
        <h1>My friends</h1>
      </div>
    );
  }
}

export default Friends;

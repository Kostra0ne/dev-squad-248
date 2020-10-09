import React from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

class OneFriend extends React.Component {
  state = {
    friend: null,
  };

  componentDidMount() {
    apiHandler
      .getOne("/friends", this.props.match.params.id)
      .then((apiRes) => {
        this.setState({ friend: apiRes.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.friend) {
      return <div>Loading my friend...</div>;
    }

    return (
      <div>
        <h1>My friend tom</h1>
        <img src={this.state.friend.profileImage} alt="" />
        <p>{this.state.friend.name}</p>
        <Link to={`/friends/${this.state.friend._id}/edit`}>
          Edit this friend
        </Link>
      </div>
    );
  }
}

export default OneFriend;

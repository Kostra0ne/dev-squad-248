import React from "react";
import apiHandler from "../api/apiHandler";
import FriendCard from "../components/FriendCard";
class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    apiHandler
      .getAll("/friends")
      .then((apiRes) => {
        this.setState({ friends: apiRes.data });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }

  render() {
    return (
      <div>
        <h1>My friends</h1>

        {this.state.friends.map((friend) => (
          <FriendCard
            id={friend._id}
            name={friend.name}
            profileImage={friend.profileImage}
          />
        ))}
      </div>
    );
  }
}

export default Friends;

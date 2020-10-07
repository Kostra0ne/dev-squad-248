import React from "react";
// import friendsJSON from "../data/friends.json";
import FriendRow from "./FriendRow";

import "../styles/List.css";

class List extends React.Component {
  state = {
    isDarkMode: false,
  };

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.isDarkMode ? "black" : "ghostwhite",
        }}
        className="List"
      >
        <button onClick={this.toggleDarkMode}>Go dark mode</button>
        {this.props.friends.map((friend, i) => (
          <FriendRow
            key={i}
            username={friend.username}
            profileImage={friend.profileImage}
            age={friend.age}
            index={i}
            handleRemove={this.props.handleRemove}
          />
        ))}
      </div>
    );
  }
}

export default List;

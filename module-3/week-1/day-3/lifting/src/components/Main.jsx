import React from "react";
import "../styles/Main.css";
import Card from "./Card";
import Form from "./Form";
import List from "./List";
import friendsJSON from "../data/friends.json";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class Main extends React.Component {
  state = {
    friends: friendsJSON,
  };

  addFriend = (friend) => {
    // console.log("I am being caallled !");

    const copyFriends = [...this.state.friends];
    copyFriends.push(friend);
    this.setState({ friends: copyFriends });

    // this.setState({
    //   friends: [...this.state.friends, friend]
    // })
  };

  removeFriend = (index, event) => {
    this.setState({
      friends: this.state.friends.filter((friend, i) => i !== index),
    });
  };

  render() {
    return (
      <div className="Main">
        <Card>
          <Form friends={this.state.friends} handleAddFriend={this.addFriend} />
        </Card>

        <Card>
          <h1>Card 2</h1>
          <CircularProgressbar
            value={this.state.friends.length}
            maxValue={100}
            text={`${this.state.friends.length} Friends`}
          />
        </Card>
        <Card>
          <h1>Friends</h1>
          <List handleRemove={this.removeFriend} friends={this.state.friends} />
        </Card>
      </div>
    );
  }
}

export default Main;

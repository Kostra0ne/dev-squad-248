import React, { Component } from "react";
import { AuthContext } from "../Auth/AuthContext";
import withAuth from "../Auth/withAuth";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
    };
  }

  static contextType = AuthContext;

  render() {
    console.log(this.context);

    return (
      <div>
        <h2>Card</h2>
        <hr />
        <h2>Props in card</h2>
        <p>{this.context.username}</p>
      </div>
    );
  }
}

export default withAuth(Card);

import React, { Component } from "react";
import { AuthContext } from "../Auth/AuthContext";

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
        <p>{this.context.username}</p>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    console.log("I am mounted ! in child");
  }

  componentDidUpdate() {
    console.log("I am updating in child");
  }

  componentWillUnmount() {
    console.log("I'm dying in child");
  }
  render() {
    return <div>Hello i'm here !</div>;
  }
}

export default MyComponent;

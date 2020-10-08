import React, { Component } from "react";
import MyComponent from "./MyComponent";

class MyTimer extends Component {
  state = {
    timer: 0,
    showComponent: true,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        {this.state.showComponent && <MyComponent />}
        <button
          onClick={() =>
            this.setState({ showComponent: !this.state.showComponent })
          }
        >
          Show
        </button>
        <h1>Hey time is running ! {this.state.timer}</h1>
      </div>
    );
  }
}

export default MyTimer;

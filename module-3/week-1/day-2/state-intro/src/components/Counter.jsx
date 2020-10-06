import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props); // Required if using constructor
  //   // this.counterValue = 0;
  //   this.state = {
  //     counterValue: 0,
  //   };
  // this.increment = this.increment.bind(this); // Fixes this binding
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counterValue: 0,
  //   };
  // }

  state = {
    counterValue: 0,
  };

  increment = () => {
    // console.log("I am being clicked");
    // this.counterValue = this.counterValue + 1;
    // console.log(this.counterValue);
    // this.state.counterValue = this.state.counterValue + 1;
    // console.log(this.state.counterValue);

    // this.setState({
    //   counterValue: this.state.counterValue + 1,
    // });

    this.setState({
      counterValue: this.state.counterValue + 1,
    });
  };

  decrement = () => {
    this.setState({
      counterValue: this.state.counterValue - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h2>Counter value is : {this.state.counterValue} </h2>
      </div>
    );
  }
}

export default Counter;

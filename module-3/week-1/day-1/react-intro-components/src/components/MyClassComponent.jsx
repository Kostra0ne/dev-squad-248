// React snippet : rcc + tab
import React, { Component } from "react";

class MyClassComponent extends Component {
  render() {
    console.log(this.props, " in class");
    return (
      <div>
        <h1>Class component</h1>
      </div>
    );
  }
}

export default MyClassComponent;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/OvercomingCSSLeaks/Parent";
import Child from "./components/OvercomingCSSLeaks/Child";
import Counter from "./components/Counter";
import Heroes from "./components/Heroes";

function App() {
  return (
    <div className="App">
      {/* <Parent />
      <Child /> */}

      {/* <Counter /> */}

      <Heroes />
    </div>
  );
}

export default App;

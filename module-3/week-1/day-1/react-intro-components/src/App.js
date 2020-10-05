import React from "react";
import logo from "./logo.svg";
import Weather from "./components/Weather";
import MyClassComponent from "./components/MyClassComponent";
import Like from "./components/Like";
import "./App.css";

function StudentCard(props) {
  // console.log(props, "inside student card");
  return (
    <div className="Card">
      <p>Student name: {props.name}</p>
      <p>Student last name: {props.lastName}</p>
    </div>
  );
}

const people = [
  {
    lastName: "Doe",
    name: "John",
    isCool: true,
  },
  {
    lastName: "IO",
    name: "Julie",
    isCool: true,
  },
];

function App(props) {
  // console.log(props, "inside app component");
  return (
    <div className="App">
      <h1>A component is just a function</h1>

      <StudentCard name="John" lastName="Doe" isCool={true} />

      <StudentCard name="Julie" lastName="IO" isCool={true} />

      <MyClassComponent foo="bar" />

      <Weather>
        <h1>Hello it's raining today !</h1>
      </Weather>

      <Weather temperature={19}>
        <h2>It's sunny today !</h2>
        <h3>Foo</h3>
      </Weather>

      <Like likes={100} />

      {/* {people
        .filter((person) => person.isCool === true)
        .map((person) => (
          <StudentCard
            name={person.name}
            lastName={person.lastName}
            isCool={person.isCool}
          />
        ))} */}
    </div>
  );
}

export default App;

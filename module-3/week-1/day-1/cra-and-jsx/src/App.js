import React from "react"; // Required until React 17.
import logo from "./logo.svg";
import "./App.css";

const people = ["Joe", "Jim", "Timmy"];

function giveMeTheDate() {
  return new Date().toString();
}

class MyClassComponent extends React.Component {
  // constructor() {}

  render() {
    return <h1>I am a class component !</h1>;
  }
}

function Foo() {
  return <h2>Hello i'm foo component</h2>;
}

function App() {
  const myNameIs = "Slim Shady";

  const myStatementWithoutFragment = (
    <div>
      <div>
        <h2>Hello i'm a child</h2>
      </div>
      <div>
        <h2>I'm the sibling</h2>
      </div>
    </div>
  );

  // const myStatementWithFragment = (
  //   <React.Fragment>
  //     <div>
  //       <h2>Fragment child</h2>
  //     </div>
  //     <div>
  //       <h2>Fragment sibling</h2>
  //     </div>
  //   </React.Fragment>
  // );

  // Same result as above

  const myStatementWithFragment = (
    <>
      <div>
        <h2>Fragment child</h2>
      </div>
      <div>
        <h2>Fragment sibling</h2>
      </div>
    </>
  );

  const peopleJSX = [];

  for (let i = 0; i < people.length; i++) {
    peopleJSX.push(
      <li>
        <span>{people[i]}</span>
      </li>
    );
  }

  const person = {
    firstName: "Max",
    lastName: "Gruber",
    address: {
      streetNumber: 12,
      city: "Paris",
    },
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h1>{2 + 2}</h1>
      <h2>My name is what ? {myNameIs}</h2>
      {myStatementWithoutFragment}
      {myStatementWithFragment}

      <h2>You need to self close single html tags such as img , input</h2>
      <img src="/logo512.png" />
      <input type="text" />

      <h2>Objects are not allowed in JSX</h2>
      {giveMeTheDate()}
      <h2>
        Hi my name is {person.firstName} {person.lastName} and I live in{" "}
        {person.address.city}
      </h2>

      <h2>But arrays are</h2>
      <ul>{peopleJSX}</ul>
      <h2>With .map()</h2>
      <ul>
        {/* {people.map((person) => (
          <li>{person}</li>
        ))} */}
        {people.map((person, i) => (
          <li key={i}>{person}</li>
        ))}

        {(() => {
          const a = 3;
          const b = 5;
          const c = a * b;
          return <div>{c}</div>;
        })()}
      </ul>

      <h2>Assets can also be in src </h2>
      <img src={logo} alt="react logo" />

      <h2>Strings {` Hello there my friend  ${person.firstName}`}</h2>

      <h2>Calling a component !</h2>

      <Foo />

      <MyClassComponent />
    </div>
  );
}

export default App;

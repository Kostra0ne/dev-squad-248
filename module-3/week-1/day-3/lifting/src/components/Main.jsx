import React from "react";
import "../styles/Main.css";
import Card from "./Card";
import Form from "./Form";
import List from "./List";

const Main = () => {
  return (
    <div className="Main">
      <Card>
        <Form />
      </Card>

      <Card>
        <h1>Card 2</h1>
      </Card>
      <Card>
        <h1>Card 3</h1>
        <List />
      </Card>
    </div>
  );
};

export default Main;

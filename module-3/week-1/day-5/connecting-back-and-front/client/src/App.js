import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import CreateFriends from "./pages/CreateFriends";
import OneFriend from "./pages/OneFriend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/friends/create" component={CreateFriends} />
        <Route exact path="/friends/:id" component={OneFriend} />
      </Switch>
    </div>
  );
}

export default App;

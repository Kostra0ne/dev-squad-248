import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivatePage from "./pages/Private";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    
    <div className="App">
      <NavMain />
      <main className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={PrivatePage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

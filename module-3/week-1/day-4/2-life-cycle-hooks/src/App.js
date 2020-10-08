import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import OnePokemon from "./pages/OnePokemon";
import NavMain from "./components/NavMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Pokemons} />
        <Route exact path="/pokemon/:id" component={OnePokemon} />
      </Switch>
    </div>
  );
}

export default App;

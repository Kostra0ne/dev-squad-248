import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NavMain from "./components/NavMain";
import "./App.css";

class App extends React.Component {
  state = {
    iLikeBoats: true,
  };

  render() {
    return (
      <div className="App">
        <NavMain />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} likesBoats={this.state.iLikeBoats} />;
            }}
          />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

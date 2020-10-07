import React from "react";
import NavMain from "./components/NavMain";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <div className="content">
        <Main />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

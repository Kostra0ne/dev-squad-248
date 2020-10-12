import React from "react";
import { AuthContext } from "../Auth/AuthContext";

const Home = () => {
  return (
    <AuthContext.Consumer>
      {(contextValue) => {
        return <h1>{contextValue.username}</h1>;
      }}
    </AuthContext.Consumer>
  );
};

export default Home;

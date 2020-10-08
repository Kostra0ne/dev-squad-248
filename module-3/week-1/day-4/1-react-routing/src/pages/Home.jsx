import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>I am the home page !</h1>
      <Link className="link" to="/about">
        Navigate to the about page
      </Link>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Home;

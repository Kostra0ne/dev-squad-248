//rafce
import React from "react";

const About = (props) => {
  return (
    <div>
      <h1>Hello i'm about</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default About;

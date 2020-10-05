// Snippet     rafce + tab
import React from "react";

const Weather = (props) => {
  //   console.log(props.temperature);
  return <div className="Weather">{props.children}</div>;
};

export default Weather;

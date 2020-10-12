import React from "react";
import Card from "../components/Card";

const Private = (props) => {
  return (
    <div className="Profile">
      <h2>Profile</h2>

      <img src="https://i.imgflip.com/4i5fwk.jpg" alt="" />

      <Card foo="bar" />
    </div>
  );
};

export default Private;

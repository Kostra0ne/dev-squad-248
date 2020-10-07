import React from "react";
import "../styles/Form.css";

const Form = (props) => {
  return (
    <form className="Form">
      <h2 className="title">Add a user</h2>

      <label className="label" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        autoComplete="off"
        className="input"
        type="text"
        name="username"
      />

      <label className="label" htmlFor="profileImage">
        Profile image
      </label>
      <input
        id="profileImage"
        autoComplete="off"
        className="input"
        type="text"
        name="profileImage"
      />

      <label className="label" htmlFor="age">
        Age
      </label>
      <input
        id="age"
        autoComplete="off"
        className="input"
        type="number"
        name="age"
      />

      <button className="button">Submit</button>
    </form>
  );
};

export default Form;

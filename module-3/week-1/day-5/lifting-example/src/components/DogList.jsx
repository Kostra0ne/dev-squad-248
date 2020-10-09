import React, { Component } from "react";

const DogList = (props) => {
  return (
    <div>
      <h1>Dog List</h1>
      {props.dogs.map((dog) => (
        <div>
          <img width="150px" src={dog.image} alt="" />
          <p>{dog.name}</p>
          <p>{dog.toy}</p>
        </div>
      ))}
    </div>
  );
};

export default DogList;

import React from "react";
import "../styles/IdCard.css";

function formatDate(date) {
  return date.toString().substring(0, 15);
}

// function IdCard({ lastName, firstName, gender, height, birth, picture }) {
function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="IdCard">
      <div className="image-container">
        <img src={picture} alt={"Picture of " + lastName} />
      </div>
      <div className="content">
        <p>
          <b> Firstname:</b>
          {firstName}
        </p>
        <p>
          <b> LastName:</b>
          {lastName}
        </p>
        <p>
          <b>Gender:</b>
          {gender}
        </p>
        <p>
          <b> Height:</b>
          {height}
        </p>
        <p>
          <b> Birth:</b>
          {formatDate(birth)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;

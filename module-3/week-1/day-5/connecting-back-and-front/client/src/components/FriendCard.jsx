import React from "react";
import { Link } from "react-router-dom";
const FriendCard = (props) => {
  return (
    <Link to={`/friends/${props.id}`}>
      <div>
        <img src={props.profileImage} alt={props.name} />
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default FriendCard;

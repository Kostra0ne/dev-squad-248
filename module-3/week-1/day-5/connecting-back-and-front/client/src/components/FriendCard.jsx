import React from "react";

const FriendCard = (props) => {
  return (
    <div>
      <img src={props.profileImage} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export default FriendCard;

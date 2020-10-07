import React from "react";

const FriendRow = ({ username, profileImage, age, index, handleRemove }) => {
  return (
    <div className="friend">
      <div>
        <img className="image" src={profileImage} alt={username} />
      </div>
      <div>
        <p>{username}</p>
      </div>
      <button onClick={(event) => handleRemove(index)}>Delete</button>
    </div>
  );
};

export default FriendRow;

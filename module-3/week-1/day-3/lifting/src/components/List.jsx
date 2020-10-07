import React from "react";
import friends from "../data/friends.json";
import "../styles/List.css";

const List = () => {
  return (
    <div className="List">
      {friends.map((friend, i) => (
        <div key={i} className="friend">
          <div>
            <img
              className="image"
              src={friend.profileImage}
              alt={friend.username}
            />
          </div>
          <div>
            <p>{friend.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

import React from "react";
import FormFriend from "../components/FormFriend";

const EditFriends = (props) => {
  return (
    <div>
      <FormFriend action="edit" id={props.match.params.id} />
    </div>
  );
};

export default EditFriends;

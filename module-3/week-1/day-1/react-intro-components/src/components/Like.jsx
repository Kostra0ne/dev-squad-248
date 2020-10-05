import React from "react";

const Like = (props) => {
  if (props.likes > 50) {
    return <div>We like react</div>;
  } else if (props.likes > 30 && props.likes <= 50) {
    return <div>React is mehhh</div>;
  } else {
    return <div>React sucks !</div>;
  }

  // return props.likes > 50 ? (
  //   <div>We like react</div>
  // ) : props.likes > 30 && props.likes <= 50 ? (
  //   <div>React is mehhh</div>
  // ) : (
  //   <div>React sucks !</div>
  // );
};

export default Like;

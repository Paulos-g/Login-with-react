import React from "react";

function Greet(props) {
  return (
    <h1>
      {props.firstname} {props.lastname}
    </h1>
  );
}
export default Greet;

import React from "react";

const person = (props) => {
  return (
    <div>
      <h1>
        Hi! My name is {props.name}! And I`m {props.age} years old.
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

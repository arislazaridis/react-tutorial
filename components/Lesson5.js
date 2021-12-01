import React from "react";

//functional component

function Lesson5(props) {
  return (
    <div>
      <h1>Functional components - {props.date}</h1>
      {props.children}
    </div>
  );
}

export default Lesson5;

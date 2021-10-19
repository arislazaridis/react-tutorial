import React from "react";

function Lesson13_EventHandling() {
  const clickHandler = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}

export default Lesson13_EventHandling;

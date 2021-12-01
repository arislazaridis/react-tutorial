import React from "react";

function Person({ name, key }) {
  return (
    <div>
      <h1>
        hey
        {key}
        {name}
      </h1>
    </div>
  );
}

export default Person;

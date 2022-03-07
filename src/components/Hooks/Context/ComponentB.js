import React from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentA";

function ComponentB(props) {
  return (
    <UserContext.Provider value={props.value}>
      <div>
        ComponetB {props.value}
        <ComponentC />
      </div>
    </UserContext.Provider>
  );
}

export default ComponentB;

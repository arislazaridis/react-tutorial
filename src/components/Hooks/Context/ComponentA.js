import React from "react";
import { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const UserContext = createContext();

function ComponentA() {
  const [state, setState] = useState("Context Hook");

  return (
    <div>
      <h1>ComponentA {state}</h1>
      <UserContext.Provider value={state}>
        <ComponentB value={state} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;

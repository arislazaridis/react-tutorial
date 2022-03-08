import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentA";

function ComponentB(props) {
  const state = useContext(UserContext);
  return <div>ComponetB {state}</div>;
}

export default ComponentB;

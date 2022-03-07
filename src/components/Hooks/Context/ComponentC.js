import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC(props) {
  const state = useContext(UserContext);
  return (
    <div>
      <div>User context value {state}</div>
    </div>
  );
}

export default ComponentC;

import React from "react";
import { UserContext } from "../../../App";

function ComponentC() {
  return (
    <div>
      <UserContext.Provider>
        {(user) => {
          return <div>User context value {user}</div>;
        }}
      </UserContext.Provider>
    </div>
  );
}

export default ComponentC;

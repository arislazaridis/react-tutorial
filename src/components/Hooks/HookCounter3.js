import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstname: "", lastname: "" }); //object
  return (
    <div>
      <input
        type="text"
        placeholder="firstname"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => {
          setName({ ...name, lastname: e.target.value });
        }}
        placeholder="lastname"
      />
      <h2>
        Your name is : {name.firstname} and lastname : {name.lastname}
      </h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounter3;

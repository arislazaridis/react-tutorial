import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const handleIncr = () => {
    if (count === 5) {
      setCount(count == 0);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecr = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button onClick={handleIncr}>+</button>
      <h1>{count}</h1>
      {count == 0 && <h1>start</h1>}
      <button onClick={handleDecr}>-</button>
    </div>
  );
}

export default HookCounter;

import React, { useState } from "react";

function HookCounter2() {
  const initialcount = 0;
  const [count, setCount] = useState(initialcount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialcount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={incrementFive}>increment 5</button>
    </div>
  );
}

export default HookCounter2;

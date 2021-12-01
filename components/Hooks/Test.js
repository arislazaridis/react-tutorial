import React, { useState } from "react";

function Test() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((previousState) => previousState + 1);
  };

  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Test;

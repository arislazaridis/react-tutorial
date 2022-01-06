import React, { useState } from "react";

const withCounter = () => (WrappedComponent) => {
  return (props) => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter(counter + 1);
    };
    const decrement = () => {
      setCounter(counter - 1);
    };

    return (
      <WrappedComponent
        {...props}
        counter={counter}
        decrement={decrement}
        increment={increment}
      />
    );
  };
};

export default withCounter;

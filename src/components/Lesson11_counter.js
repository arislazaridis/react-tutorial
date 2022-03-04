import React, { Component } from "react";

import withCounterClass from "./HOCS/withCounterClass";

export class Lesson11_counter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2>Counter : {count}</h2>
        <button onClick={incrementCount}>increment</button>
      </div>
    );
  }
}

// export default withCounter()(Lesson11_counter);
export default withCounterClass(Lesson11_counter);

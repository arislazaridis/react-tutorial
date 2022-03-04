import Lesson11_counter from "../Lesson11_counter";
import React from "react";

const withCounterClass = (WrappedComponent) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.counter}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return HOC;
};

export default withCounterClass;

import React, { Component } from "react";
import withCounter from "./HOCS/withCounter";

export class Lesson11_counter extends Component {
  render() {
    return (
      <div>
        <h2>Counter : {this.props.counter}</h2>
        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.props.decrement();
          }}
        >
          decrement
        </button>
      </div>
    );
  }
}

export default withCounter()(Lesson11_counter);

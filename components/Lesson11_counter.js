import React, { Component } from "react";

export class Lesson11_counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          decrement
        </button>
      </div>
    );
  }
}

export default Lesson11_counter;

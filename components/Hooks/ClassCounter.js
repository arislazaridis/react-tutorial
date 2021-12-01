import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecr = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div style={{ display: "flex", textAlign: "center" }}>
        <h1>Counter with class Component : </h1>
        <button onClick={this.handleInc}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleDecr}>-</button>
      </div>
    );
  }
}

export default ClassCounter;

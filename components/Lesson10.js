import React, { Component } from "react";

export class Lesson10 extends Component {
  //dimiourgia antikeimenou state
  constructor() {
    super();
    this.state = {
      message: "Welcome",
    };
  }

  changeMessage() {
    this.setState({ message: "thanx for subscribing" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Lesson10;

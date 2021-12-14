import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    this.clickHandler = this.clickHandler.bind(this); //i desmeysi einai aparaititi giati to this tha itan undefined // binding event handler
  }

  clickHandler() {
    this.setState({
      message: "goodbye",
    });
  }

  render() {
    //render method
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

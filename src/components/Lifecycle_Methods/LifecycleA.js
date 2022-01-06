import React, { Component } from "react";

//Lifecycle Methods

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aris",
    };
    console.log("lifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA");
    return null;
  }

  //   componentDidMount() {
  //     console.log("LifecycleA componentDidMount");
  //   }

  changeState = () => {
    this.setState({
      name: "Lazaridis",
    });
  };

  componentDidUpdate() {
    console.log("LifecycleA component Did Update");
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
}

export default LifecycleA;

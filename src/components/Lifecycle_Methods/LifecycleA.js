import React, { Component } from "react";

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

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  render() {
    console.log("LifecycleA render");
    return <div>Lifecycle A</div>;
  }
}

export default LifecycleA;

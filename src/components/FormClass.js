import React, { Component } from "react";

export class FormClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",

      email: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Form with class components</h1>
      </div>
    );
  }
}

export default FormClass;

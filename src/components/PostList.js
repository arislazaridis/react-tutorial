import React, { Component } from "react";
import axios from "axios";

// Post request

class PostList extends Component {
  constructor(props) {
    super(props);

    //initial
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  //setstate
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //post event
  sumbitHandler = (e) => {
    e.preventDefault();
    console.log(this.state); //print current state of data
    try {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.state) //argument:url , data
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { userId, title, body } = this.state; //destructuring
    return (
      <div>
        <h1>Post List</h1>
        <form onSubmit={this.sumbitHandler}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Body:</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostList;

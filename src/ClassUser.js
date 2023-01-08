import React, { Component } from "react";

class ClassUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "taha",
      age: 31,
    };
  }
  componentDidMount() {
    // called after all the html gets loaded
    console.log("component did mount");
  }
  componentDidUpdate(preProps, preState, snapshot) {
    // called when any component get update
    console.log("component did update", preState);
    this.setState({ age: this.state.age + 1 });
  }
  // udpateCount() {
  //   console.log("udpate count called");
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }
  render() {
    console.warn("render method called", this.props);
    return (
      <>
        <h1>User Component, {this.state.name}</h1>
        <p>{this.state.age}</p>
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>Increment by 1</button>
        {/* <h1>{this.state.count}</h1>
        <h2>{this.props.name}</h2>
        <button
          onClick={() => {
            this.udpateCount();
          }}
        >
          udpate count
        </button> */}
      </>
    );
  }
}

export default ClassUser;

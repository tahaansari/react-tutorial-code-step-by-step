import React, { Component } from "react";

class ClassUser extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  udpateCount() {
    console.log("udpate count called");
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h1>{this.state.count}</h1>
        <h2>{this.props.name}</h2>
        <button
          onClick={() => {
            this.udpateCount();
          }}
        >
          udpate count
        </button>
      </>
    );
  }
}

export default ClassUser;

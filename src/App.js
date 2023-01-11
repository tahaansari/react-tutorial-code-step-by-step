import React, { Component, useState, createRef } from "react";

class App extends Component {
  constructor() {
    super();
    console.log("constructor function in app.js component");
    this.inputRef = createRef();
  }
  componentDidMount() {
    console.log((this.inputRef.current.value = "10000"));
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1>Ref in React</h1>
        <input type="text" defaultValue="10" ref={this.inputRef} />
      </div>
    );
  }
}

export default App;

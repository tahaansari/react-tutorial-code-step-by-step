import React from "react";
import MyUseEffect from "./MyUseEffect";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1>App.js Component</h1>
        <MyUseEffect></MyUseEffect>
      </div>
    );
  }
}

export default App;

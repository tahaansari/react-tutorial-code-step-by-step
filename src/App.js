import React, { useRef } from "react";
import User from "./User";

function App() {
  let inputRef = useRef(null);
  function changeValue() {
    console.log("change value called");
    // inputRef.current.value = "Hello World";
  }
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>forwardRef in React Hook</h1>
      <User ref={inputRef} />
      <button onClick={changeValue}>submit</button>
    </div>
  );
}

export default App;

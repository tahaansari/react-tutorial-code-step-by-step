import React, { useState } from "react";
import MyUseEffect from "./MyUseEffect";
function App() {
  const [counter, setCounter] = useState(10);
  const [data, setData] = useState(100);
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>App.js Component</h1>
      <MyUseEffect data={data} counter={counter}></MyUseEffect>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update Data
      </button>
    </div>
  );
}

export default App;

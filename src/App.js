import React, { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  function changeVal(e) {
    setVal(e.target.value);
    console.log(val);
  }
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Controlled component in React</h1>
      <input type="text" defaultValue="hello" onChange={changeVal} />
    </div>
  );
}

export default App;

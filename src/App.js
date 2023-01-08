import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import ClassUser from "./ClassUser";
import Login from "./Login";
// import React from "react";

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("taha");
  return (
    <div className="App">
      <div>
        {/* <h1>Hello, {t his.state.name}</h1>
          <button
            onClick={() => {
              this.setState({ name: "Taha Mehmood Ansari" });
            }}
          >
            change name
          </button> */}
        <ClassUser name={name} />
        <button
          onClick={() => {
            setName("Taha Mehmood Ansari");
          }}
        >
          change state
        </button>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import ClassUser from "./ClassUser";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "blue", color: "white", padding: "5rem" }}>
        <ClassUser name="Taha Ansari" age="31" />
        <ClassUser name="Adil Ansari" age="33" />
        <ClassUser name="Imran Ansari" age="28" />
      </div>
    </div>
  );
}

export default App;

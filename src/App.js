import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import ClassUser from "./ClassUser";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <div>
        {/* <ClassUser name="Taha Ansari" age="31" /> */}
        <Login></Login>
      </div>
    </div>
  );
}

export default App;

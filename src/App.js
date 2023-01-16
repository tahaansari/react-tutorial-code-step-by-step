import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Company from "./Company";
import Channel from "./Channel";
import Protected from "./Protected";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

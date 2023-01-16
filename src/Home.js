import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/about">Click Me</Link>
      <button onClick={() => navigate("/about")}>Now click me</button>
    </>
  );
}

export default Home;

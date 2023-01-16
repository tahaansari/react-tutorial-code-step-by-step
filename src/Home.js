import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  console.log("home page got rendered");
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/about">Click Me</Link>
      <button onClick={() => navigate("/about")}>Now click me</button>
    </>
  );
}

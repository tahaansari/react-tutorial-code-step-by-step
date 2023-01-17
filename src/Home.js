import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  console.log("home page got rendered");

  const users = [
    { id: 1, name: "Taha", email: "taha@gmail.com" },
    { id: 2, name: "Adil", email: "adil@gmail.com" },
    { id: 3, name: "Anas", email: "anas@gmail.com" },
    { id: 4, name: "Maaz", email: "maaz@gmail.com" },
  ];
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/about">Click Me</Link>
      <button onClick={() => navigate("/about")}>Now click me</button>

      {users.map((user, index) => (
        <Link key={index} to={"/user/" + user.id}>
          <h1>{user.name}</h1>
        </Link>
      ))}
    </>
  );
}

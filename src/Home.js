import { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState(null);

  const [make, setTitle] = useState("");
  const [model, setDesc] = useState("");

  const users = [
    { id: 1, name: "Taha", email: "taha@gmail.com" },
    { id: 2, name: "Adil", email: "adil@gmail.com" },
    { id: 3, name: "Anas", email: "anas@gmail.com" },
    { id: 4, name: "Maaz", email: "maaz@gmail.com" },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/Mobile")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setMobile(res);
      });
  }, []);

  const addMobile = () => {
    console.log("add mobile called");
    let data = { make, model };
    console.log(JSON.stringify(data));
    fetch("http://localhost:3000/mobile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2>Home Page</h2>

      <div className="form">
        <input
          type="text"
          value={make}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          value={model}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            addMobile();
          }}
        >
          add
        </button>
        <hr />
      </div>
      {mobile &&
        mobile.reverse().map((product, index) => (
          <div key={index}>
            <h2>{product.id}</h2>
            <h5>{product.make}</h5>
            <p>{product.model}</p>
            <hr />
          </div>
        ))}
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

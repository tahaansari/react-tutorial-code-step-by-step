import { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const users = [
    { id: 1, name: "Taha", email: "taha@gmail.com" },
    { id: 2, name: "Adil", email: "adil@gmail.com" },
    { id: 3, name: "Anas", email: "anas@gmail.com" },
    { id: 4, name: "Maaz", email: "maaz@gmail.com" },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);

  const addMobile = () => {
    console.log("add mobile called");
    const data = { id: 6, title, desc };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
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
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <textarea
          cols="30"
          rows="3"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
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

      {products &&
        products.map((product, index) => (
          <div key={index}>
            <h2>{product.id}</h2>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
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

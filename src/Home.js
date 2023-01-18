import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  console.log("home page got rendered");

  const [products, setProducts] = useState(null);

  const users = [
    { id: 1, name: "Taha", email: "taha@gmail.com" },
    { id: 2, name: "Adil", email: "adil@gmail.com" },
    { id: 3, name: "Anas", email: "anas@gmail.com" },
    { id: 4, name: "Maaz", email: "maaz@gmail.com" },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:3000/products", {
  //     mathod: "POST",
  //     contentType: "application/json",
  //     body: {
  //       id: 6,
  //       title: "iPhone 11",
  //       description: "Iphone 11 desc",
  //       price: 650,
  //       category: "smartphones",
  //     },
  //   });
  // }, []);

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

  function addMobile() {
    console.log("add mobile called");
  }
  return (
    <>
      <h2>Home Page</h2>

      <div className="form">
        <input type="text" />
        <br />
        <br />
        <textarea id="" cols="30" rows="3"></textarea>
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
            <h5>{product.title}</h5>
            <p>{product.description}</p>
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

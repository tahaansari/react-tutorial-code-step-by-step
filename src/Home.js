import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/about"></Link>
    </>
  );
}

export default Home;

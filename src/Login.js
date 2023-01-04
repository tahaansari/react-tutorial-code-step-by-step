import React, { useState } from "react";

const Login = () => {
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    console.log(`hello world!!`);
  };
  const userHandler = (e) => {
    const item = e.target.value;
    if (item.length > 3) {
      console.log("username should be less than 3");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="text" placeholder="Enter User Id" onChange={userHandler} />
          <br />
          <br />
          <input type="text" placeholder="Enter Password" />
          <br />
          <br />
          <button type="button">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

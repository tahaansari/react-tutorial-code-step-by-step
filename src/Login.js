import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  function setLogin() {
    localStorage.setItem("login", true);
    navigate("/");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <input type="text" placeholder="Enter User Id" onChange={userHandler} />
          </div>
          <div>{isError && <p>Error Occured</p>}</div>
          <div>
            <input type="text" placeholder="Enter Password" />
          </div>
          <div>
            <button onClick={() => setLogin()} type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

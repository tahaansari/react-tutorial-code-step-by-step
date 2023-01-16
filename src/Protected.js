import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  let login = localStorage.getItem("login");

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
}
export default Protected;

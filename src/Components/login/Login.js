import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("click");
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary ml-5" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </>
  );
};

export default Login;

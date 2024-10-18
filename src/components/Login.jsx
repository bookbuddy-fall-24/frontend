/* TODO - add your code to create a functional React component that renders a login form */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ token, setToken }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState(false);

  const handleUserInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
        loginData
      );
      console.log(data);
      if (data.data.token) {
        localStorage.setItem("token", data.data.token);
        setToken(data.data.token);
        navigate("/me");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  if (token) {
    navigate("/me");
  }

  return (
    <div className="register-containers">
      <h2>Login</h2>
      <form className="register-form" onSubmit={handleLoginSubmit}>
        <label>
          <p>Email</p>
          <input type="email" name="email" onChange={handleUserInput} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" onChange={handleUserInput} />
        </label>
        <button>Login</button>
      </form>
      {error && <p className="auth-error">{error}</p>}
      <p>
        Need an account? Sign up <Link to="/register">Here</Link>
      </p>
    </div>
  );
}

export default Login;

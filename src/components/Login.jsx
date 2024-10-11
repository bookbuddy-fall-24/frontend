/* TODO - add your code to create a functional React component that renders a login form */
import React from "react";

function Login() {
  return (
    <div className="register-containers">
      <h2>Login</h2>
      <form className="register-form">
        <label>
          <p>Email</p>
          <input type="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up here.</Link>
    </div>
  );
};

export default Login;

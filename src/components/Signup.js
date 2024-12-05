import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

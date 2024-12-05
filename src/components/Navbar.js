import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Blog</h1>
      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active" end>
          Home
        </NavLink>
        <NavLink to="/add-post" className="nav-link" activeClassName="active">
          Add Post
        </NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/signup" className="nav-link" activeClassName="active">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

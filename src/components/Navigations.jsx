/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <nav
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto",
      }}
    >
      <Link to="/">See All Books</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navigations;

// These are our NPM modules from https://npmjs.com/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const token = window.localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage);

  console.log("Are we logged in? ", isLoggedIn);

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link className="nav-link" to="/">
        Home
      </Link>
      {token ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <div>
          <Link className="nav-link" to="/register">
            Register
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/ProjectPage">
            Create a new project
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

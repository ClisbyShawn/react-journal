import React from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";

const NavBar = () => {
  const user = auth.currentUser();
  return (
    <nav className="navbar navbar-nav navbar-expand-lg navbar-dark bg-dark">
      <Link to="/overview/dashboard">
        <p className="navbar-brand">Journal</p>
      </Link>
      <ul className="navbar-nav ml-auto nav-text">
        <li>{user.name}</li>
      </ul>
      <button
        className="btn btn-sm btn-dark"
        style={{ marginLeft: "2%" }}
        onClick={() => {
          auth.logout();
          window.location = "/";
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;

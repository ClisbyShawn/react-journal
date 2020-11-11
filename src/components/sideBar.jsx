import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const linkStyle = { color: "inherit", textDecoration: "inherit" };

  return (
    <ul className="sidebar bg-dark">
      <Link to="/overview/dashboard" style={linkStyle}>
        <li>Dashboard</li>
      </Link>
      <Link to="/overview/journal" style={linkStyle}>
        <li>My Journal</li>
      </Link>
      <Link to="/overview/plan" style={linkStyle}>
        <li>Post Plan</li>
      </Link>
      <Link to="/overview/analytics" style={linkStyle}>
        <li>Analytics</li>
      </Link>

      <div className="sidebar-bottom">
        <Link to="/overview/settings" style={linkStyle}>
          <li>Settings</li>
        </Link>
        <p className="small-print ">1.0.0</p>
      </div>
    </ul>
  );
};

export default SideBar;

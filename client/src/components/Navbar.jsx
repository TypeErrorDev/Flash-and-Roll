import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">Login</a>
        </li>
        <li className="nav-item">
          <a href="#">Register</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

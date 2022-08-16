import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";
const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="content">
          <div className="nav-brand">
            <h1>
              <Link to="/">Navbar</Link>
            </h1>
          </div>
          <div className="menu">
            <div className="menu-item">
              <ul className="items">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to="#">
                    Service<i class="fa-solid fa-caret-down"></i>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
              <button className="btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

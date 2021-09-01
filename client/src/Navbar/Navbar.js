import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="NavbarItems">
      <a href="/">
        <h1 className="navbar-logo">
          The Lightsaber Project
          <i></i>
        </h1>
      </a>

      {user && (
        <>
          <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
            <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div className="background-img">
            <ul
              className={showMenu ? "nav-menu active" : "nav-menu"}
              style={{ listStyleType: "none" }}
            >
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      {/* <Button>Sign Up</Button> */}
    </nav>
  );
};

export default Navbar;

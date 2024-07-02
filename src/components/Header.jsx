import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Logo3D from "./logo3D";

function Header() {
  return (
    <header className="header">
      <div className="Nombreylogo">
        <NavLink to="/" className="logo">
          <Logo3D />
        </NavLink>
        <NavLink to="/" className="nombre">
         JUAN C. PAEZ
        </NavLink>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" exact="true" activeClassName="active-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active-link">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              CV
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

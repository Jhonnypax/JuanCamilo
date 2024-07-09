import React, { useState } from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Logo3D from "./logo3D";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeMenu}>✖</button>
        <ul>
          <li>
            <NavLink to="/" exact="true" activeClassName="active-link" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active-link" onClick={closeMenu}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link" onClick={closeMenu}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeClassName="active-link" onClick={closeMenu}>
              EXPERIENCE
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;

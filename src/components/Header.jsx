import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Logo3D from "./logo3D";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
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

import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Logo3D from "./logo3D";

function Header() {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>
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
            <NavLink to="/Experience" activeClassName="active-link">
              EXPERIENCE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

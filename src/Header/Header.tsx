import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // using react-icons
import "../Header/Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <h1 className="logo">SD.</h1>

      {/* Navbar */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills-container" onClick={closeMenu}>Skills</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
      </nav>

      {/* Actions */}
      <div className="header-actions">
        <button className="fm">Get-in-Touch</button>

        {/* ✅ Toggle icon with react-icons */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;

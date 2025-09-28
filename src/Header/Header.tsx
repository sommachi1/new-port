
import { motion } from "framer-motion";
import React from "react";
import "../Header/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">SD.</h1>
      
      <nav className="navbar" id="mobile-menu">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#skills-container">Skills</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
      
      <div className="header-actions">
        <button className="fm">Get-in-Touch</button>
        <i className="fa-solid fa-bars menu-icon" id="menu-icon"></i>
      </div>
    </header>
  );
};

export default Header;
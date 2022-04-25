import React, {  } from "react";

import MilasA from "../../Assets/PhotoLimas1.png";

import "./NavBar.css";
  function Click() {
    let navbar = document.querySelector(".main-nav ul");
    navbar.classList.toggle("active");
  }
  
  const Navbar = () => {
    return (
      <div className="main-header">
        <div className="containerlogo">

        <a href='#' className="brand-logo">
          <img className="milas" src={MilasA} alt="Logo Salim HEMMAR" />
        </a>
        </div>
        <div href="#" className="toggle-button" onClick={Click}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  
import React, { useEffect, useState } from "react";

import Logo from "../../Assets/LogoPortfolio.png";

import "./NavBar.css";
  function Click() {
    let navbar = document.querySelector(".main-nav ul");
    navbar.classList.toggle("active");
  }


  const Navbar = () => {
    const [navBackground, setNavBackground] = useState('main-nav-transparent')
    const [brgrMenu, setbrgrMenu] = useState('brgrMenu-transparent')
    
    useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY < 800
          if (show) {
              setNavBackground('main-nav-transparent')
              setbrgrMenu('brgrMenu-transparent')
          } else {
              setNavBackground('main-nav')
              setbrgrMenu('burger-btn')
          }
      }
      document.addEventListener('scroll', handleScroll)
      }, [])
    return (
      <div className="main-header">
        <div href="#" className={brgrMenu} onClick={Click}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={navBackground}>
          <ul>
        <div className="angry-grid">
            <li className="item-0">
              <a href="#About">About</a>
            </li>
            <li className="item-1">
              <a href="#Skill">Skill</a>
            </li>
            <div className="containerlogo item-4">
            <a href="#Homme">
            <img className="logo" src={Logo} alt="Logo Salim HEMMAR" />
        </a>
        </div>
            <li className="item-3">
              <a href="#Projects">Projects</a>
            </li>
            <li className="item-2">
              <a href="#Contact">Contact</a>
            </li>
          </div>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  
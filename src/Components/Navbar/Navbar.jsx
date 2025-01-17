import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ scrollToSection }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar-cross-button" onClick={toggleNavbar}>
        <div className={`line ${isNavbarVisible ? "line1-active" : ""}`}></div>
        <div className={`line ${isNavbarVisible ? "line2-active" : ""}`}></div>
        <div className={`line ${isNavbarVisible ? "line3-active" : ""}`}></div>
      </div>

      <div
        className={`Navbar-container ${
          isNavbarVisible ? "show-navbar" : "hide-navbar"
        } ${isScrolled ? "navbar-scrolled" : ""}`}
      >
        <ul className="navbar">
          <li
            onClick={() => {
              scrollToSection("hero");
              toggleNavbar();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
              toggleNavbar();
            }}
          >
            Portfolio
          </li>
          <li
            onClick={() => {
              scrollToSection("skills");
              toggleNavbar();
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              toggleNavbar();
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
              toggleNavbar();
            }}
          >
            About me
          </li>
        </ul>
      </div>
    </>
  );
}

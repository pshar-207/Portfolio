import React from "react";
import "./HeroSection.css";

import linkedin_icon from "../../assets/Contact/linkedin.svg";
import github_icon from "../../assets/Contact/github.svg";
import email_icon from "../../assets/Contact/email.png";

export default function HeroSection() {
  return (
    <>
      <div className="Hero-section-container">
        <div className="uper-hero-container">
          <div className="web-text">Web</div>
          <div className="about">
            <p className="about-hi">Hi, I am</p>
            <p className="about-name">Praveen Sharma</p>
            <p className="about-paragraph">
              BCA graduate with 80.56% score. Experienced in developing an
              e-commerce website. Skilled in JavaScript, HTML, CSS, Node.js, and
              MySQL.
            </p>
          </div>
        </div>
        <div className="lower-hero-container">
          <div className="contact-container">
            <p className="contact">Contact</p>
            <ul className="contact-list">
              <li>
                <a href="https://www.linkedin.com/in/praveensharma07/">
                  <img src={linkedin_icon} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/pshar-207">
                  <img src={github_icon} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={email_icon} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="developer-text">DEVELOPER</div>
        </div>
      </div>
    </>
  );
}

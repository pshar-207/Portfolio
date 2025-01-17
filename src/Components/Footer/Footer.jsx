import React from "react";
import "./Footer.css";
import arrow from "../../assets/Footer/arrow-up.svg";
import linkedin from "../../assets/Footer/linkedin.svg";
import github from "../../assets/Footer/github.svg";
import email from "../../assets/Footer/email.svg";

export default function Footer({ scrollToSection }) {
  return (
    <>
      <div className="Footer-Container">
        <div
          className="backToTop-contaier"
          onClick={() => scrollToSection("hero")}
        >
          <img src={arrow} alt="up-arrow" />
          <p>BACK TO TOP</p>
        </div>
        <div className="link-container">
          <ul className="link-list">
            <li>
              <a
                href="https://www.linkedin.com/in/praveen-sharma-264b6b344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pshar-207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <img src={email} alt="email" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

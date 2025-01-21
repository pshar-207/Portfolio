import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow from "../../assets/Footer/arrow-up.svg";
import linkedin from "../../assets/Footer/linkedin.svg";
import github from "../../assets/Footer/github.svg";
import email from "../../assets/Footer/email.svg";

export default function Footer({ scrollToSection }) {
  useEffect(() => {
    console.log("Initializing AOS...");
    AOS.init({
      duration: 800,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="Footer-Container">
        <div
          className="backToTop-contaier"
          onClick={() => scrollToSection("hero")}
        >
          <img data-aos="fade" src={arrow} alt="up-arrow" />
          <p data-aos="fade">BACK TO TOP</p>
        </div>
        <div className="link-container">
          <ul className="link-list">
            <li data-aos="fade">
              <a
                href="https://www.linkedin.com/in/praveen-sharma-264b6b344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li data-aos="fade">
              <a
                href="https://github.com/pshar-207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </li>
            <li data-aos="fade" onClick={() => scrollToSection("contact")}>
              <img src={email} alt="email" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Projects.css";
import project1 from "../../assets/Project/project1.jpg";
import link_icon from "../../assets/Project/link.svg";
import github_icon from "../../assets/Project/github.svg";

export default function Projects() {
  return (
    <>
      <div className="Projects-container">
        <div className="projects-Heading-container">
          <span>PORTFOLIO</span>
        </div>
        <div className="project-list-container">
          <ul className="project-list">
            <li className="project">
              <div className="project-contianer">
                <div className="project-name-link">
                  <span className="project-name">E-Commerce</span>
                  <div className="project-link-container">
                    <span className="github-source">
                      <a
                        href="https://github.com/pshar-207/BotanicBlend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={github_icon} alt="git" />
                      </a>
                    </span>
                    <span className="project-link">
                      <a
                        href="https://botanicblend-xomm.onrender.com/Index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={link_icon} alt="link" />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="project-images-about">
                  <div className="project-images-container">
                    <img src={project1} alt="" />
                  </div>
                  <div className="project-about-container">
                    <span className="project-about">ABOUT</span>
                    <p className="project-about-paragraph">
                      This is a full-stack e-commerce website where users can
                      browse products by categories and skin-type, add items to
                      their cart, and make purchases. The project features a
                      user-friendly interface for customers.
                    </p>
                    <span className="technologies-use">TECHNOLOGIES USE</span>
                    <ul className="technologies-list">
                      <li className="technology">
                        Backend: Node.js, Express.js
                      </li>
                      <li className="technology">Database: MySQL</li>
                      <li className="technology">
                        Frontend: HTML, CSS, JavaScript
                      </li>
                      <li className="technology">Hosting: Render</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

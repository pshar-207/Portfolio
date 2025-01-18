import React from "react";
import "./Skills.css";
import html5_svg from "../../assets/Skills/html5.svg";
import css3_svg from "../../assets/Skills/css3.svg";
import javascript_svg from "../../assets/Skills/javascript.svg";
import react_svg from "../../assets/Skills/react.svg";
import github_svg from "../../assets/Skills/github.svg";
import figma_svg from "../../assets/Skills/figma.svg";
import node_js_svg from "../../assets/Skills/node_js.svg";
import mysql_svg from "../../assets/Skills/mysql.svg";
import java_svg from "../../assets/Skills/java.svg";
import cpp_svg from "../../assets/Skills/cpp.svg";
import c_svg from "../../assets/Skills/c.svg";

export default function Skills() {
  return (
    <>
      <div className="Skills_container">
        <div className="skills-Heading-container">
          <span>SKILLS</span>
        </div>
        <div className="Skills-list-container">
          <ul className="Skills-list">
            <li className="USING-NOW">
              <span>USING NOW:</span>
              <ul className="UsingNow-list">
                <li>
                  <img src={react_svg} alt="" />
                  <p>REACT</p>
                </li>
                <li>
                  <img src={javascript_svg} alt="" />
                  <p>JAVASCRIPT</p>
                </li>
                <li>
                  <img src={html5_svg} alt="" />
                  <p>HTML5</p>
                </li>
                <li>
                  <img src={css3_svg} alt="" />
                  <p>CSS3</p>
                </li>

                <li>
                  <img src={github_svg} alt="" />
                  <p>GITHUB</p>
                </li>

                <li>
                  <img src={figma_svg} alt="" />
                  <p>FIGMA</p>
                </li>
                <li>
                  <img src={node_js_svg} alt="" />
                  <p>NODEJS</p>
                </li>
                <li>
                  <img src={mysql_svg} alt="" />
                  <p>MYSQL</p>
                </li>
              </ul>
            </li>
            <li className="LEARNING">
              <span>LEARNING:</span>
              <ul className="LEARNING-list">
                <li>
                  <img src={react_svg} alt="" />
                  <p>REACT</p>
                </li>
                <li>
                  <img src={node_js_svg} alt="" />
                  <p>NODEJS</p>
                </li>
              </ul>
            </li>
            <li className="OTHER-SKILLS">
              <span>OTHER SKILLS:</span>
              <ul className="OTHER-SKILLS-list">
                <li>
                  <img src={java_svg} alt="" />
                  <p>JAVA</p>
                </li>
                <li>
                  <img src={cpp_svg} alt="" />
                  <p>C++</p>
                </li>
                <li>
                  <img src={c_svg} alt="" />
                  <p>C</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

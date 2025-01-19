import React, { useState } from "react";
import "./ThemeMode.css";
import sun from "../../assets/Theme/sun.svg";
import moon from "../../assets/Theme/moon.svg";

export default function () {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevTheme) => !prevTheme);

    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--font-color", "rgb(225, 225, 225)");

      root.style.setProperty("--nav-bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--nav-font-color", "rgb(225, 225, 225)");
      root.style.setProperty(
        "--mobile-nav-cross-button-color",
        "rgb(225, 225, 225)"
      );
      root.style.setProperty("--mobile-nav-bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--mobile-nav-font-color", "rgb(225, 225, 225)");

      root.style.setProperty("--upper-shadow", "rgba(0, 0, 0, 0.3)");

      root.style.setProperty("--hero-bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--hero-font-color", "rgb(225, 225, 225)");

      root.style.setProperty("--project-heading-bg-color", "rgb(50, 50, 50)");
      root.style.setProperty(
        "--project-heading-font-color",
        "rgb(225, 225, 225)"
      );
      root.style.setProperty("--project-bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--project-font-color", "rgb(225, 225, 225)");
    } else {
      root.style.setProperty("--bg-color", "rgb(225, 225, 225)");
      root.style.setProperty("--font-color", "rgb(0,0,0)");

      root.style.setProperty("--nav-bg-color", "rgb(225, 225, 225)");
      root.style.setProperty("--nav-font-color", "rgb(0,0,0)");
      root.style.setProperty("--mobile-nav-cross-button-color", "rgb(0,0,0");
      root.style.setProperty("--mobile-nav-bg-color", "rgb(225, 225, 225)");
      root.style.setProperty("--mobile-nav-font-color", "rgb(0,0,0)");

      root.style.setProperty("--upper-shadow", "rgb(255, 255, 255)");

      root.style.setProperty("--hero-bg-color", "rgb(225, 225, 225)");
      root.style.setProperty("--hero-font-color", "rgb(0,0,0)");

      root.style.setProperty(
        "--project-heading-bg-color",
        "rgb(225, 225, 225)"
      );
      root.style.setProperty("--project-heading-font-color", "rgb(0,0,0)");
      root.style.setProperty("--project-bg-color", "rgb(225, 225, 225)");
      root.style.setProperty("--project-font-color", "rgb(0,0,0)");
    }
  };
  return (
    <>
      <div className="ThemeMode-container">
        <div className="theme-button" onClick={toggleDarkMode}>
          {darkMode ? (
            <img src={moon} className="moon-icon" />
          ) : (
            <img src={sun} className="sun-icon" />
          )}
        </div>
      </div>
    </>
  );
}

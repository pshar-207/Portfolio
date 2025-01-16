import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/About Me/AboutMe";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;

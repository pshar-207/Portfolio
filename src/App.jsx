import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <HeroSection />
      <Projects />
    </>
  );
}

export default App;

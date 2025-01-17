import { useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutMe from "./Components/About Me/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      hero: heroRef,
      projects: projectsRef,
      skills: skillsRef,
      about: aboutRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <HeroSection scrollToSection={scrollToSection} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;

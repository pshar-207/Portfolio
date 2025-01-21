import React, { useEffect } from "react";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
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
      <div className="AboutMe-Container">
        <div data-aos="fade-up" className="aboutMe-Heading-container">
          <span>ABOUT ME</span>
        </div>
        <div data-aos="fade-up" className="aboutMe-Paragraph">
          <p>
            I am a recent Bachelor of Computer Applications (BCA) graduate with
            an academic score of 80.56%. I have developed a full-featured
            e-commerce website using Node.js, Express, and MySQL, showcasing my
            ability to build scalable and efficient web applications. Currently,
            I am enhancing my skills in React and am well-versed in core web
            technologies, including HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>
    </>
  );
}

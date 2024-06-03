import img from "../images/ana.jpeg";
import zaid from "../data/Asem_alfoqha.pdf";

import "../styles/about.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>

        <div className="about-content">
          <div data-aos="fade-right" className="left">
            <img src={img} alt="" />
          </div>
          <div data-aos="fade-left" className="right">
            <div className="text">I'm Asem Alfoqha ...</div>
            <p>
              Talented Software Engineer with 3 years of professional experience
              contributing to all phases of software development of web
              applications. Demonstrated expertise in enhancing front end
              components and features by identifying and resolving bugs. Skilled
              in using web technologies such as React JS, JavaScript,
              TypeScript, HTML5, and CSS3.
            </p>
            <a href={zaid} download target="_blank" className="cv-download">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;

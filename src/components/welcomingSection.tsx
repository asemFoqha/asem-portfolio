import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/main.css";

function WelcomingSection() {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Web Developer", "junior programmer", "React Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="main">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Asem alfoqha</div>
          <div className="text-3">
            I'm a <span ref={typeTarget}></span>
          </div>
          <a href="#contact">Hire Me</a>
        </div>
      </div>
    </section>
  );
}

export default WelcomingSection;

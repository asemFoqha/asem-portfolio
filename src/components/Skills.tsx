import "../styles/about.css";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
          <div data-aos="fade-up" className="skills__left">
            <div className="text">Skills {"&"} Experiences.</div>
            <ul>
              <li>
                <strong>Front-End Development:</strong> HTML5, SASS, CSS3,
                JavaScript (ES5/ES6), React, Redux, TypeScript, jQuery, AJAX,
                JSON, REST, Bootstrap
              </li>
              <li>
                <strong>Libraries:</strong> React-router-dom, react-hook-form,
                React query
              </li>
              <li>
                <strong>Design Patterns:</strong> MVC, Singleton, Prototype,
                Observer{" "}
              </li>
              <li>
                <strong>Database:</strong> MySQL, MongoDB{" "}
              </li>
              <li>
                <strong>Programming Languages:</strong> TypeScript, JavaScript{" "}
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, Mac OS{" "}
              </li>
              <li>
                <strong>SDLC (Development Methodologies):</strong> Agile / Scrum{" "}
              </li>
              <li>
                <strong>Cloud Platforms:</strong> Vercel
              </li>
              <li>
                <strong>Local development servers:</strong> Vite,
                Create-react-app (CRA)
              </li>
              <li>
                <strong>Tools & IDEs:</strong> GitHub, WebStorm, VS Code, Visual
                Studio, Workbench, Figma, IntelliJ, ITerm, Adobe XD
              </li>
            </ul>
          </div>

          <div data-aos="fade-down" className="skills__right">
            <div className="persentage">
              HTML <span>90%</span>
            </div>

            <div className="line html"></div>

            <div className="persentage">
              React<span>85%</span>
            </div>

            <div className="line react"></div>

            <div className="persentage">
              CSS<span>80%</span>
            </div>

            <div className="line css"></div>

            <div className="persentage">
              JavaScript<span>90%</span>
            </div>

            <div className="line js"></div>

            <div className="persentage">
              OPP<span>85%</span>
            </div>

            <div className="line opp"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

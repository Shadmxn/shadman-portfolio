import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS/SCSS",
  "SQL",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "EJS",
  "RESTful APIs",
  "OpenAI API",
  "Bootstrap",
  "Material UI",
  "jQuery",
  "Git",
  "GitHub",
  "npm",
  "VS Code",
  "Chrome DevTools",
  "Ruby",
  "Rails",
  "Mocha & Chai",
  "Ajax",
];

const labelsSecond = [
  "Critical Thinking",
  "Scientific Research",
  "Data Analysis",
  "Laboratory Techniques",
  "Quantitative Analysis",
  "Scientific Writing",
  "Team Collaboration",
  "Statistical Analysis",
  "Experimental Design",
  "Literature Review",
  "Presentation Skills",
  "Biological Systems Knowledge",
  "Ethical Reasoning",
];

const labelsThird = [
  "Algorithm Design",
  "Discrete Mathematics",
  "Data Structures",
  "Object-Oriented Programming (OOP)",
  "Database Management",
  "SQL and Relational Databases",
  "Minimal Python",
  "Minimal Haskell",
  "Web Development Basics",
  "Debugging and Testing",
  "Basic Networking Concepts",
];

function Expertise() {
  return (
    <div className="container" id="education">
      <div className="skills-container">
        <h1>Education</h1>
        <div className="skills-grid">
          <div className="skill">
            {/* <FontAwesomeIcon icon={faReact} size="3x" /> */}
            <h3>Lighthouse Labs</h3>
            <h3>April 2024 - December 2024</h3>
            <h3>Full Stack Web Development</h3>
            <p>
              Lighthouse Labs is a comprehensive program where I learned
              full-stack web development from scratch, focusing on modern
              technologies, best practices, and effective collaboration. It
              provided the hands-on experience needed to build production-ready
              applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            {/* <FontAwesomeIcon icon={faDocker} size="3x" /> */}
            <h3>McMaster University</h3>
            <h3>September 2020 - April 2024</h3>
            <h3>Honours BSc in Life Sciences</h3>
            <p>
              My Life Sciences degree provided a strong foundation in biological
              systems, research practices, critical thinking, and data analysis.
              These transferable skills have been invaluable in my transition to
              tech, helping me tackle complex challenges and collaborate
              effectively.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            {/* <FontAwesomeIcon icon={faPython} size="3x" /> */}
            <h3>McMaster University</h3>
            <h3>September 2020 - April 2024</h3>
            <h3>Minor in Computer Science</h3>
            <p>
              My Computer Science minor introduced me to essential programming
              concepts, algorithms, and database management, providing a strong
              foundation for software development. This academic experience not
              only deepened my technical knowledge but also supported a seamless
              transition into the tech industry.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

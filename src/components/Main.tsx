import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typewriter } from "react-simple-typewriter";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/166082360?v=4"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Shadmxn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shadmanr"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Shadman Rahman</h1>
          <p className="typewriter">
            <Typewriter
              words={["Full Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Shadmxn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shadmanr"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from "react";
import Sandbox from "../assets/images/Sandbox.png";
import Switchy from "../assets/images/Switchy.png";
import Photolabs from "../assets/images/Photolabs.png";
import Tweeter from "../assets/images/NewTweeter.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img src={Sandbox} className="zoom" alt="thumbnail" width="100%" />
          <h2>Sandbox Prep</h2>
          <p>
            Sandbox Prep is a cutting-edge, AI-powered educational app developed
            with React.js, TypeScript, Express.js, PostgreSQL, and the OpenAI
            API. It offers AI-driven video transcription and personalized
            feedback to help students achieve academic success. Currently
            tailored for MMI preparation, the app provides a seamless and
            responsive experience across platforms, combining innovation with
            practicality to support effective learning.
          </p>
        </div>
        <div className="project">
          <img src={Switchy} className="zoom" alt="thumbnail" width="100%" />
          <h2>Switchy</h2>
          <p>
            Switchy is a career-switching app designed to guide users through
            their transition into new industries or roles. Built with React.js,
            Express.js, PostgreSQL, it features personalized roadmaps, curated
            learning resources, mentor connections, and progress tracking. The
            app empowers users to navigate their career journeys confidently,
            providing tailored support and insights for professional growth.
          </p>
        </div>
        <div className="project">
          <img src={Photolabs} className="zoom" alt="thumbnail" width="100%" />
          <h2>PhotoLabs</h2>
          <p>
            PhotoLabs is a simple yet elegant stock photo application, designed
            as a React-based single-page application. It allows users to browse
            and interact with photos across various categories, such as People,
            Nature, and Travel. With a clean interface and responsive design,
            PhotoLabs delivers an engaging experience, showcasing modern web
            development practices.
          </p>
        </div>
        <div className="project">
          <img src={Tweeter} className="zoom" alt="thumbnail" width="100%" />
          <h2>Tweeter</h2>
          <p>
            Tweeter is a simple, single-page Twitter (now X) clone designed to
            replicate key functionalities of the original platform. Built with a
            focus on simplicity and responsiveness, users can create tweets,
            interact with existing posts, and see live character count
            validation. Tweeter emphasizes an engaging user experience while
            showcasing practical front-end and back-end development skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

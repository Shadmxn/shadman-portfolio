import React from "react";
import WebUp from "../assets/images/WebUp.png";
import Sandbox from "../assets/images/Sandbox.png";
import Switchy from "../assets/images/Switchy.png";
import Photolabs from "../assets/images/Photolabs.png";
import Tweeter from "../assets/images/NewTweeter.png";
import "../assets/styles/Project.scss";
import DevQuiz from "../assets/images/DevQuiz.png";
import AiBlog from "../assets/images/AiBlog.png";
import ExpenseTrend from "../assets/images/ExpenseTrend.png";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <a
          href="https://github.com/Shadmxn/blog-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <img
              src={AiBlog}
              className="zoom"
              alt="AI Blog Generator thumbnail"
              width="100%"
            />
            <h2>AI Blog Generator</h2>
            <p>
              The AI Blog Generator is an advanced content creation platform
              that leverages OpenAI to generate high-quality, engaging blog
              articles. It produces well-structured content based on
              user-defined topics, with automatic formatting and AI-generated
              images powered by DALL-E 3. This integration allows for stunning,
              contextually relevant visuals that seamlessly accompany the
              written content, elevating the overall reading experience. Perfect
              for bloggers and content creators looking to automate their
              writing process while maintaining a human-like touch.
            </p>
          </div>
        </a>
        <a
          href="https://www.expensetrend.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <img
              src={ExpenseTrend}
              className="zoom"
              alt="Expense Trend thumbnail"
              width="100%"
            />
            <h2>Expense Trend</h2>
            <p>
              Expense Trend is a financial management platform that helps users
              track their spending, manage budgets, and gain insights into their
              financial habits. My contributions to the project include building
              out the interactive dashboard with detailed analytics, integrating
              Stripe for seamless subscription handling, and developing an
              AI-powered chatbot for real-time expense insights. The platform is
              designed with a focus on user experience, providing clear
              visualizations and secure payment flows to make budgeting
              effortless.
            </p>
          </div>
        </a>

        <a
          href="https://bitbucket.org/FarazBhojani/webup-website/src/develop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <img
              src={WebUp}
              className="zoom"
              alt="WebUp thumbnail"
              width="100%"
            />
            <h2>WebUp</h2>
            <p>
              WebUp is a platform that allows users to enhance any website by
              entering its URL. The platform provides an interactive preview of
              the enhanced website, which users can review before deciding to
              purchase. After purchasing through Stripe, users receive a
              downloadable zip file of their enhanced website, and they can also
              have a copy sent to their email for future access.
            </p>
          </div>
        </a>

        <a
          href="https://sandboxprep.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project">
            <img src={Sandbox} className="zoom" alt="thumbnail" width="100%" />
            <h2>Sandbox Prep</h2>
            <p>
              Sandbox Prep is a cutting-edge, AI-powered educational app
              developed with React.js, TypeScript, Express.js, PostgreSQL, and
              the OpenAI API. It offers AI-driven video transcription and
              personalized feedback to help students achieve academic success.
              Currently tailored for MMI preparation, the app provides a
              seamless and responsive experience across platforms, combining
              innovation with practicality to support effective learning.
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Shadmxn/tweeter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <img src={Tweeter} className="zoom" alt="thumbnail" width="100%" />
            <h2>Tweeter</h2>
            <p>
              Tweeter is a simple, single-page Twitter (now X) clone designed to
              replicate key functionalities of the original platform. Built with
              a focus on simplicity and responsiveness, users can create tweets,
              interact with existing posts, and see live character count
              validation. Tweeter emphasizes an engaging user experience while
              showcasing practical front-end and back-end development skills.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/Shadmxn/photolabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <img
              src={Photolabs}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
            <h2>PhotoLabs</h2>
            <p>
              PhotoLabs is a simple yet elegant stock photo application,
              designed as a React-based single-page application. It allows users
              to browse and interact with photos across various categories, such
              as People, Nature, and Travel. With a clean interface and
              responsive design, PhotoLabs delivers an engaging experience,
              showcasing modern web development practices.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/DaniyarBazakov/Switchy/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project">
            <img src={Switchy} className="zoom" alt="thumbnail" width="100%" />
            <h2>Switchy</h2>
            <p>
              Switchy is a career-switching app designed to guide users through
              their transition into new industries or roles. Built with
              React.js, Express.js, PostgreSQL, it features personalized
              roadmaps, curated learning resources, mentor connections, and
              progress tracking. The app empowers users to navigate their career
              journeys confidently, providing tailored support and insights for
              professional growth .
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Shadmxn/quiz-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <img
              src={DevQuiz}
              className="zoom"
              alt="DevQuiz thumbnail"
              width="100%"
            />
            <h2>DevQuiz</h2>
            <p>
              DevQuiz is an interactive quiz platform tailored for early
              developers. It challenges users with questions on HTML, CSS, SQL,
              and more, providing instant feedback and a final score to track
              progress. DevQuiz is designed to be engaging and educational,
              helping developers sharpen their skills in a fun, competitive way.
              Perfect for testing your knowledge and identifying areas for
              improvement.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;

import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="August 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer & Marketing Strategist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sandbox Prep - AI Startup, Hamilton ON
            </h4>
            <p>
              At Sandbox Prep, I lead the development of an AI-powered
              educational app, building robust back-end systems with Express.js
              and PostgreSQL while integrating OpenAI’s API for personalized
              features. I focus on creating a seamless user experience using
              React.js, TypeScript, and Material-UI, while collaborating with
              the team to define key app features, user journeys, and marketing
              strategies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2022 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Process Specialist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Best Buy, Ancaster ON
            </h4>
            <p>
              At Best Buy, I manage product inventory, ensure timely restocking,
              and optimize store layouts to improve sales and customer
              satisfaction. I work closely with team members to refine
              merchandising strategies and assist in training new hires on
              product knowledge and operational efficiency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2017 - February 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Supervisor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shoppers Drug Mart, Ancaster ON
            </h4>
            <p>
              As a supervisor, I oversaw daily operations, mentored a team of
              cashiers and merchandisers, and managed inventory processes to
              boost sales. I resolved customer concerns, enhanced team
              productivity, and ensured consistent delivery of exceptional
              customer service.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
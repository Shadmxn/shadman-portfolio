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
            date="February 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Expense Trend, Calgary AB (Remote)
            </h4>
            <p>
              At Expense Trend, I develop AI-powered marketing solutions,
              including an AI-driven blog generator that leverages OpenAI for
              automated content creation and DALL·E 3 for dynamic image
              generation. Additionally, I contributed to WebUp, a platform under
              Expense Trend, by enhancing its AI-powered website transformation
              tool. My role includes implementing Stripe integrations for secure
              transactions, optimizing user interactions, and refining backend
              processes to improve performance and scalability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="August 2024 - February 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Founder & Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sandbox Prep - AI Startup, Hamilton ON
            </h4>
            <p>
              Sandbox Prep is an AI-powered educational platform that helps
              users prepare for MMI and CASPer through interactive simulations
              and AI-driven feedback. As a founding developer, I helped build
              the platform using React, PostgreSQL, Material UI, and the OpenAI
              API, integrating intelligent analysis tools to deliver
              personalized feedback. I oversaw product vision, development, and
              strategy, focusing on creating an intuitive user interface and
              leveraging AI to improve learning outcomes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="August 2023 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              WordPress Developer & Content Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              R2 Studios - Toronto, ON
            </h4>
            <p>
              I co-own and manage R2 Studios, overseeing client projects in web
              development, content strategy, and digital marketing. My
              responsibilities include designing and maintaining WordPress
              websites with custom themes, SEO optimization, and responsive
              layouts to enhance user experience and drive online visibility.
              Additionally, I produce and edit branded photos and videos for
              digital marketing campaigns, contributing to stronger brand
              engagement and storytelling for clients.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2022 - February 2025"
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
              At Best Buy, I managed product inventory, ensured timely
              restocking, and optimized store layouts to improve sales and
              customer satisfaction. I worked closely with team members to
              refine merchandising strategies and assisted in training new hires
              on product knowledge and operational efficiency.
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

import React from "react";
import ExperienceNode from "./ExperienceNode";
import ArrowDivider from "./ArrowDivider";
const Experience = () => {
  const fulltimeDevopsDescription = ["TBD..."];
  const devopsDescription = [
    "Designed and implemented Jenkins pipelines for existing projects, enhancing CI/CD workflows",
    "Containerized applications and builds using Docker to increase fluidity between systems",
    "Developed and executed unit tests for a web application’s frontend, improving code reliability and coverage",
    "Automated release note generation by creating a Python script to verify Git tags and generate markdown files with commit-based release information, decreasing developer intervention",
    "Collaborated with cross-functional teams to ensure smooth integration of DevOps tools and practices",
  ];

  const ngSWEDescription = [
    "Created and modified tests for a virtual representation of hardware for an Electronic Warfare product using Python and Robot Framework",
    "Developed embedded functionality to process and transmit hardware data in real-time C++",
    "Tested software and firmware in the Systems Integration Lab (SIL) to ensure seamless performance of new features",
    "Ran through unit tests to identify gaps, ensuring comprehensive functionality coverage",
  ];

  const strategyTitanDescription = [
    "Worked with advanced Excel techniques, such as Power Query",
    "Conveyed data to others in meaningful ways in Tableau",
  ];
  return (
    <div id="experience" className="section">
      <div className="experience-full-content">
        <h1 className="lighter center-text section-header">EXPERIENCE</h1>
        <div className="experience-wrapper">
          <ExperienceNode
            name="Northrop Grumman"
            position="Software Engineer - DevOps"
            startdate="9.2025"
            enddate="Present"
            description={fulltimeDevopsDescription}
            location="Rolling Meadows, IL"
          />
          <span className="block">
            <ArrowDivider />
          </span>
          <ExperienceNode
            name="Northrop Grumman"
            position="Software Engineering Intern - DevOps"
            startdate="4.2024"
            enddate="2.2025"
            description={devopsDescription}
            location="Rolling Meadows, IL"
            // logo="ng-logo.png"
          />
          <span className="block">
            <ArrowDivider />
          </span>
          <ExperienceNode
            name="Northrop Grumman"
            position="Software Engineering Intern"
            startdate="5.2023"
            enddate="3.2024"
            description={ngSWEDescription}
            location="Rolling Meadows, IL"
            // logo="ng-logo.png"
          />
          <span className="block">
            <ArrowDivider />
          </span>
          <ExperienceNode
            name="Strategy Titan"
            position="Data Analytics Intern"
            startdate="10.2022"
            enddate="3.2023"
            description={strategyTitanDescription}
            location="Glen Ellyn, IL"
            // logo="strategy-titan-logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import EducationNode from "./EducationNode";
import ArrowDivider from "../ExperienceSection/ArrowDivider";

const Education = () => {
  const lewis_classes = [
    "S.W. Systems Capstone",
    "Discrete Mathematics",
    "Linear Algebra",
  ];
  const cod_classes = [
    "Advanced Python",
    "Database Applications",
    "Assembly Language",
  ];
  return (
    <div id="education" className="section">
      <div className="education-full-content">
        <h1 className="lighter center-text section-header">EDUCATION</h1>
        <div className="education-wrapper">
          <div className="education">
            <EducationNode
              school_name="Lewis University"
              degree="Bachelor of Science in Computer Science"
              gpa="4.0"
              classes={lewis_classes}
              dates="May 2025"
              image="lewis.png"
              image_id="lewis-image"
            />
            <span className="block">
              <ArrowDivider />
            </span>
            <EducationNode
              school_name="College of DuPage"
              degree="Associates of Science"
              gpa="3.95"
              classes={cod_classes}
              dates="May 2024"
              image="cod.png"
              image_id="cod-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

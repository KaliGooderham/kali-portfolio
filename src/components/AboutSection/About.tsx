import { useState } from "react";
import PersonalInfo from "../Overlay/PersonalInfo";
import ArrowDivider from "../ExperienceSection/ArrowDivider";
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
const About = () => {
  const [activeOverlay, setActiveOverlay] = useState(false);
  const refPic = useRef(null);
  const refName = useRef(null);
  const refRole = useRef(null);
  const refDegree = useRef(null);
  const refArrow = useRef(null);

  const picVisible = useIntersection(refPic, { threshold: 0.2 });
  const nameVisible = useIntersection(refName, { threshold: 0.2 });
  const roleVisible = useIntersection(refRole, { threshold: 0.2 });
  const degreeVisible = useIntersection(refDegree, {
    threshold: 0.2,
  });
  const arrowVisible = useIntersection(refArrow, {
    threshold: 0.2,
  });
  return (
    <div>
      <div id="about">
        <PersonalInfo
          activeOverlay={activeOverlay}
          setActiveOverlay={setActiveOverlay}
        />

        <span
          ref={refPic}
          className={`center fade-slide ${picVisible ? "visible" : ""}`}
        >
          <p className="hover-text">Click Profile Picture</p>
          <button
            id="profile-button"
            onClick={() => {
              setActiveOverlay(true);
            }}
          >
            <img
              src="profile-no-bg.jpg"
              alt="Picture of ME!"
              className="profile-pic"
            />
          </button>
        </span>
        <div id="intro" className="center-text">
          <h1
            ref={refName}
            className={`fade-slide ${nameVisible ? "visible" : ""}`}
            style={{ animationDelay: ".6s" }}
          >
            Kali Gooderham
          </h1>
          <h2
            ref={refRole}
            className={`fade-slide ${roleVisible ? "visible" : ""}`}
            style={{ animationDelay: "1s" }}
          >
            Software Engineer - DevOps
          </h2>
          <h2
            ref={refDegree}
            className={`fade-slide ${degreeVisible ? "visible" : ""}`}
            style={{ animationDelay: "1.4s" }}
          >
            B.S. Computer Science
          </h2>
        </div>
      </div>
      <span
        className={`move-divider-down fade-slide ${
          degreeVisible ? "visible" : ""
        }`}
        style={{ animationDelay: "2s" }}
      >
        <ArrowDivider jumpto="#projects" />
      </span>
    </div>
  );
};

export default About;

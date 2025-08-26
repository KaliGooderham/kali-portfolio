import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";

const Contact = () => {
  const heading_ref = useRef(null);
  const heading_visible = useIntersection(heading_ref, {
    threshold: 0.2,
  });
  const ref_p = useRef(null);
  const p_visible = useIntersection(heading_ref, {
    threshold: 0.2,
  });
  const buttons_ref = useRef(null);
  const buttons_visible = useIntersection(heading_ref, {
    threshold: 0.2,
  });
  return (
    <div id="contact-wrapper">
      <div id="contact" className="section">
        <span
          ref={heading_ref}
          className={`fade-slide ${heading_visible ? "visible" : ""}`}
        >
          <h1 className="lighter center-text section-header">CONTACT ME</h1>
        </span>
        <p
          ref={ref_p}
          className={`fade-slide center-text ${p_visible ? "visible" : ""}`}
          style={{ animationDelay: ".5s" }}
        >
          Please do not hesitate to reach out for any inquiries - feel free to
          message me on LinkedIn, but my most responsive form of communication
          is email.
        </p>

        <div className="personal-links-wrapper">
          <div
            ref={buttons_ref}
            className={`fade-slide center-text personal-links ${
              buttons_visible ? "visible" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <a href="mailto:kaligooderham@gmail.com">
              <div className="link-button">
                <img src="white-mail.png" alt="" />
                Email
              </div>
            </a>
            <a href="https://github.com/KaliGooderham" target="_blank">
              <div className="link-button">
                <img src="white-github.png" alt="" />
                GitHub
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kali-gooderham/"
              target="_blank"
            >
              <div className="link-button">
                <img src="white-linkedin.png" alt="" />
                LinkedIn
              </div>
            </a>
            <a
              href="./public/KaliGooderham2025Resume.pdf"
              download="kgooderham_resume"
            >
              <div className="link-button">
                <img src="white-link.png" alt="" />
                Resume
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

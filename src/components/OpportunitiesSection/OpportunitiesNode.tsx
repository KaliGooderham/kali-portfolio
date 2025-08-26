import ArrowDivider from "../ExperienceSection/ArrowDivider";
const OpportunitiesNode = () => {
  return (
    <div id="opportunity-node">
      <div className="opportunity-section block">
        <h2>Hackathon Speech</h2>
        <h3>4.2025</h3>
        <p>
          I was asked to give a speech to College of DuPage students at their
          2025 Hackathon, to give insight about why I chose CoD, what I took
          advantage of, how I got my internships and job, and things I have
          learned personally and professionally in the field. My goal was to
          connect with students who may have felt a bit lost in the tech world,
          as community college students are underrepresented but have just as
          much potential and drive as students going to larger schools.
        </p>
        <div id="hackathon-pic-wrapper">
          <img
            src="hackathon-group.jpeg"
            alt="Hackathon Team Picture"
            id="hackathon-pic"
          />
        </div>
      </div>
      <span className="block">
        <ArrowDivider />
      </span>
      <div className="opportunity-section block">
        <h2>Success Story</h2>
        <h3>8.2024</h3>
        <p>
          I was recognized for my hard work and accomplishments with a success
          story on my community college's website. I talk about my reasoning
          behind going to community college, the benefits, and how it has set me
          up for success in the job market and my personal life.
        </p>
        <div className="">
          <div className="link-button">
            <img src="white-link.png" className="tech-icon" />
            <a
              href="https://www.cod.edu/about/stories/students/gooderham.html"
              target="_blank"
              className="github-button"
            >
              Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesNode;

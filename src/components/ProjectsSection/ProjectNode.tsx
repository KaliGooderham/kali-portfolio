interface Props {
  title: string;
  madewith: Array<string>;
  image1: string;
  image2?: string;
  description: string;
  demo?: string;
  github?: string;
  live?: string;
}
const ProjectNode = ({
  title,
  madewith,
  image1,
  image2,
  description,
  demo,
  github,
  live,
}: Props) => {
  return (
    <div className="project-node flex node block">
      <div className="project-content">
        <h2 className="lighter bold-font">{title}</h2>
        <div className="madewith-technologies">
          {/* <p>Made With: </p> */}
          {madewith.map((technology: string) => (
            <p>
              {/* <a href=""> */}
              <img
                src={technology}
                alt={technology}
                className="project-technology-logo"
              />
              {/* </a> */}
            </p>
          ))}
        </div>
        <p>{description}</p>
        <div title="links" className="project-link-buttons">
          {demo && (
            <div className="project-link-button">
              <img src="youtube.png" className="tech-icon" />
              <a href={demo} target="_blank" className="demo-button">
                Demo
              </a>
            </div>
          )}
          {github && (
            <div className="project-link-button">
              <img src="white-github.png" className="tech-icon" />
              <a href={github} target="_blank" className="github-button">
                GitHub
              </a>
            </div>
          )}
          {live && (
            <div className="project-link-button">
              <img src="external-link.png" className="tech-icon" />
              <a href="www.site.com" target="_blank" className="live-button">
                Live
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="project-images">
        <img src={image1} alt="" />
        {image2 && <img src={image2} alt="" />}
      </div>
    </div>
  );
};

export default ProjectNode;

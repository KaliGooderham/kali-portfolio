import ProjectNode from "./ProjectNode";
const Projects = () => {
  const itinerate_info = {
    title: "Itinerate",
    madewith: [
      "python.png",
      "react.png",
      "typescript.png",
      "mysql.png",
      "aws.png",
      "openai.png",
      "docker.png",
    ],
    image1: "itinerate-cover.png",
    // image2: "trips.png",
    description: `Built a full-stack application that simplifies travel planning by combining flight 
    data from the Amadeus Open Flight Search API with AI-generated hotel and experience recommendations. 
    Users can export a PDF itinerary stored in AWS S3. The project was containerized with Docker for easy 
    developer setup. Tech stack: React, TypeScript, FastAPI, MySQL, AWS.`,
    github: "https://github.com/KaliGooderham/Itinerate",
    demo: "https://youtu.be/TpTif3Z_Svw",
  };

  const release_notes_info = {
    title: "Automated Release Notes",
    madewith: ["shell-script.png", "git.png", "jenkins.png", "docker.png"],
    image1: "changelog.png",
    description: `During an internship at Northrop Grumman, I built an automated release notes generator triggered 
    by new Git tags. The solution used a Jenkins pipeline to run a containerized shell script that created a timestamped 
    branch, pulled commit titles from the main branch, compiled them into a markdown file, and opened a pull request for 
    review. This was my first end-to-end solution, covering planning, development, testing, and deployment.`,
  };

  const dockerized_server_info = {
    title: "Dockerized OpenSSH Server",
    madewith: ["linux.png", "docker.png"],
    description: `A lightweight Rocky Linux container running an OpenSSH server on a custom port, configured for 
    remote access and ready for further security hardening or service deployment.`,
    image1: "dockerized.png",
    github: "https://github.com/KaliGooderham/SSH-with-Docker",
  };

  const portfolio_info = {
    title: "Portfolio Site",
    // madewith: ["react.png", "typescript.png", "docker.png", "jenkins.png"],
    madewith: ["react.png", "typescript.png", "docker.png", "jenkins.png"],
    description: `A web-based portfolio to showcase projects, education, and experience. 
    It was super fun to experiment with CSS and get inspiration from other portfolios. Included practice
    with containerization and CI/CD.`,
    image1: "portfolio-diagram.png",
    github: "https://github.com/KaliGooderham/kali-portfolio",
  };
  return (
    <div id="projects" className="section">
      <h1 className="lighter center-text section-header">PROJECTS</h1>
      <div className="project-nodes">
        <ProjectNode
          title={dockerized_server_info.title}
          madewith={dockerized_server_info.madewith}
          description={dockerized_server_info.description}
          image1={dockerized_server_info.image1}
          github={dockerized_server_info.github}
        />
        <ProjectNode
          title={itinerate_info.title}
          madewith={itinerate_info.madewith}
          description={itinerate_info.description}
          image1={itinerate_info.image1}
          github={itinerate_info.github}
          demo={itinerate_info.demo}
        />
        <ProjectNode
          title={portfolio_info.title}
          madewith={portfolio_info.madewith}
          description={portfolio_info.description}
          image1={portfolio_info.image1}
          github={portfolio_info.github}
        />
        <ProjectNode
          title={release_notes_info.title}
          madewith={release_notes_info.madewith}
          description={release_notes_info.description}
          image1={release_notes_info.image1}
        />
      </div>
    </div>
  );
};

export default Projects;

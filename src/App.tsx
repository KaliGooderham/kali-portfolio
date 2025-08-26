import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/AboutSection/About";
import Projects from "./components/ProjectsSection/Projects";
import Skills from "./components/SkillsSection/Skills";
import Education from "./components/EducationSection/Education";
import Experience from "./components/ExperienceSection/Experience";
import Contact from "./components/ContactSection/Contact";
import Copyright from "./components/Copyright/Copyright";
import Opportunities from "./components/OpportunitiesSection/Opportunities";

function App() {
  return (
    <>
      <div className="starry-bg">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 2 + 2}px`,
              height: `${Math.random() * 2 + 2}px`,
              animationDuration: `${Math.random() * 8 + 4}s`, // random twinkle speed
              animationDelay: `${Math.random() * 10}s`, // staggered twinkling
            }}
          />
        ))}
      </div>
      <Navbar />
      <div className="full-site-width">
        <div className="main-content-wrapper-about">
          <div className="main-content">
            <About />
          </div>
        </div>
      </div>

      <div className="main-content-wrapper">
        <div className="main-content">
          <Projects />
          <Skills />
          <Education />
          <Experience />
          <Opportunities />
          <Contact />
        </div>
      </div>
      <Copyright />
      {/* <ThemeSwitch /> */}
    </>
  );
}

export default App;

// href="#about"
import { useEffect, useState } from "react";
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      // Adjust this value as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    console.log({ scrolled });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = [
      "about",
      "projects",
      "skills",
      "education",
      "experience",
      "opportunities",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="navbar">
      <nav>
        <li
          className={
            activeIndex === 0 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            onClick={() => {
              scrollToTop();
              setActiveIndex(0);
            }}
          >
            <button>About</button>
          </a>
        </li>
        <li
          className={
            activeIndex === 1 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            href="#projects"
            onClick={() => {
              setActiveIndex(1);
            }}
          >
            <button>Projects</button>
          </a>
        </li>
        <li
          className={
            activeIndex === 2 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            href="#skills"
            onClick={() => {
              setActiveIndex(2);
            }}
          >
            <button>Skills</button>
          </a>
        </li>
        <li
          className={
            activeIndex === 3 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            href="#education"
            onClick={() => {
              setActiveIndex(3);
            }}
          >
            <button>Education</button>
          </a>
        </li>
        <li
          className={
            activeIndex === 4 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            href="#experience"
            onClick={() => {
              setActiveIndex(4);
            }}
          >
            <button>Experience</button>
          </a>
        </li>
        <li
          className={
            activeIndex === 5 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            href="#opportunities"
            onClick={() => {
              setActiveIndex(5);
            }}
          >
            <button>Opportunities</button>
          </a>
        </li>
        <li
          className={
            activeIndex === 6 ? "nav-item-active" : "nav-item-inactive"
          }
        >
          <a
            href="#contact"
            onClick={() => {
              setActiveIndex(6);
            }}
          >
            <button>Contact</button>
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;

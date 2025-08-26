import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
useRef;
interface Props {
  activeOverlay: boolean;
  setActiveOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}
const PersonalInfo = ({ activeOverlay, setActiveOverlay }: Props) => {
  const overlay = document.getElementById("overlay");
  const on = () => {
    overlay && overlay.style.setProperty("display", "block");
  };
  const off = () => {
    overlay && overlay.style.setProperty("display", "none");
  };
  if (activeOverlay) on();
  if (!activeOverlay) off();

  if (activeOverlay) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const text_ref = useRef(null);
  const text_visible = useIntersection(text_ref, {
    threshold: 0.2,
  });
  const heading_ref = useRef(null);
  const heading_visible = useIntersection(text_ref, {
    threshold: 0.2,
  });
  const pictures_ref = useRef(null);
  const pictures_visible = useIntersection(text_ref, {
    threshold: 0.2,
  });
  return (
    <div id="overlay">
      <div className="overlay-content-wrapper">
        <div className="overlay-content">
          <button
            onClick={() => {
              setActiveOverlay(false);
            }}
            id="overlay-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
              className="close-button"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <div className="smaller-overlay">
            <div className="overlay-text">
              <h1
                ref={heading_ref}
                className={`fade-slide ${heading_visible ? "visible" : ""}`}
              >
                Extra Information About Me!
              </h1>
              <div
                ref={text_ref}
                className={`fade-slide ${text_visible ? "visible" : ""}`}
                style={{ animationDelay: "1s" }}
              >
                <p>
                  Aside from programming and computer science, I love to ride
                  motorcycles, be around animals, and do art.
                </p>
                <p>
                  I love spending time with my family, friends, and boyfriend,
                  and I have recently discovered I love to travel, and I'm
                  looking forward to discovering what life is like in more parts
                  of the world.
                </p>
                <p>
                  I am also extremely passionate about health and fitness, as I
                  was diagnosed with a severe autoimmune disease in 2020. I have
                  been off medication since 2022, and am dedicated to living my
                  life med-free.
                </p>
              </div>
            </div>

            <div
              ref={pictures_ref}
              className={`fade-slide overlay-images ${
                pictures_visible ? "visible" : ""
              }`}
              style={{ animationDelay: "2s" }}
            >
              <img src="PersonalInfo/gym-pic.jpg" alt="" />
              <img src="PersonalInfo/gem-lake.jpeg" alt="" />
              <img src="PersonalInfo/r6.jpeg" alt="" />
              <img src="PersonalInfo/frank.jpeg" alt="" />
              <img src="PersonalInfo/barcelona-food.jpg" alt="" />
              <img src="PersonalInfo/boomer.jpeg" alt="" />
              <img src="PersonalInfo/monserrat.jpg" alt="" />
              <img src="PersonalInfo/mum-kali.jpg" alt="" />
              <img src="PersonalInfo/rocky-bear.jpeg" alt="" />
              <img src="PersonalInfo/rocky-bike.jpeg" alt="" />
              <img src="PersonalInfo/rocky-sleeping.jpg" alt="" />
              <img src="PersonalInfo/kalinick-ride.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

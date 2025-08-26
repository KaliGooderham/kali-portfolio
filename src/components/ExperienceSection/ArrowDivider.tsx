import React from "react";

interface Props {
  jumpto?: string;
}

const ArrowDivider = ({ jumpto }: Props) => {
  return (
    <div className="arrow-divider pulse-element">
      {jumpto && (
        <a href={jumpto}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // height="24px"
            viewBox="0 -960 960 960"
            // width="24px"
            // fill="#e3e3e3"
            className="arrow-divider-svg upside-down"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"
            />
          </svg>
        </a>
      )}
      {!jumpto && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // height="24px"
          viewBox="0 -960 960 960"
          // width="24px"
          // fill="#e3e3e3"
          className="arrow-divider-svg"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"
          />
        </svg>
      )}
    </div>
  );
};

export default ArrowDivider;

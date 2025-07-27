import React from "react";
import "../assets/css/main.css";
import "../assets/css/viewmorebtn.css"
const ButtonViewmore = () => {
  return (
    <div className ="container">
    <div className="xb-btn text-center mt-55">
      <a
        href="#!"
        className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data-strock"
      >
        <div className="xb-item--hidden">
          <span className="xb-item--hidden-text">View More Case Studies</span>
        </div>
        <div className="xb-item--holder">
          <span className="xb-item--text xb-item--text1">View More Case Studies</span>
          <div className="xb-item--icon">
            <i className="fal fa-plus"></i>
          </div>
          <span className="xb-item--text xb-item--text2">View More Case Studies</span>
        </div>
      </a>
    </div>
    </div>
  );
};

export default ButtonViewmore;

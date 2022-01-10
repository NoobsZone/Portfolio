import React from "react";
import "./intro.css";
import image from "../img/imgbin_business-man-businessperson-desktop-png.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, My name is</h2>
          <h2 className="i-name">Anoy Chowdhury</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front end developper</div>
              <div className="i-title-item">Front end developper</div>
              <div className="i-title-item">Front end developper</div>
              <div className="i-title-item">Front end developper</div>
              <div className="i-title-item">Front end developper</div>
            </div>
          </div>
          <div className="i-desc">
            A front-end web developer is responsible for implementing visual
            elements that users see and interact with in a web application.
          </div>
        </div>
      </div>
      <div className="i-right">
          <img src={image} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

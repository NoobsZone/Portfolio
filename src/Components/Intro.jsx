import React from "react";
import "./intro.css";

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
        </div>
      </div>
      <div className="i-right">Right</div>
    </div>
  );
};

export default Intro;

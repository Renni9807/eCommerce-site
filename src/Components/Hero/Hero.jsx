import React from "react";
import arrow_icon from "../Assets/arrow.png";
import front_img from "../Assets/frontpage.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero">
        <div className="hero-left">
          <h2>A Leap For The New One</h2>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={front_img} alt="hero_image" />
        </div>
      </div>
    </div>
  );
};

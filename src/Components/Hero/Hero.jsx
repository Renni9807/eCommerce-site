import React from "react";
import arrow_icon from "../Assets/arrow.png";
import "./Hero.css";

export const Hero = () => {
  const scrollToCollections = () => {
    document
      .getElementById("new-collections")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-bg">
      <div className="hero">
        <div className="hero-left">
          <h2>A Leap For The New One</h2>
          <div className="hero-latest-btn" onClick={scrollToCollections}>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

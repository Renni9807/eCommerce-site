import React from "react";
import SlideShow from "../Components/SlideShow/SlideShow"; // Ensure correct path
import p73_img from "../Components/Assets/product_73.png";
import p74_img from "../Components/Assets/product_74.png";
import p75_img from "../Components/Assets/product_75.png";
import "./CSS/Jewelry.css"; // Ensure correct path

const JewelryPage = () => {
  const jewelrySlides = [
    { image: p73_img },
    { image: p74_img },
    { image: p75_img },
  ];

  return (
    <div className="jewelry-page">
      <SlideShow slides={jewelrySlides} />
      <div className="coming-soon-overlay">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default JewelryPage;

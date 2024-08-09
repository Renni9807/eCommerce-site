import React from "react";
import SlideShow from "../Components/SlideShow/SlideShow";
import p73_img from "../Components/Assets/product_73.png";
import p74_img from "../Components/Assets/product_74.png";
import p75_img from "../Components/Assets/product_75.png";
import "./CSS/JewelryPage.css";

const JewelryPage = () => {
  const jewelrySlides = [
    { image: p73_img },
    { image: p74_img },
    { image: p75_img },
  ];

  return (
    <div className="jewelry-page">
      <div className="blurred-slideshow">
        <SlideShow slides={jewelrySlides} />
      </div>
      <div className="coming-soon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default JewelryPage;

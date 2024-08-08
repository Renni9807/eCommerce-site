import React from "react";
import ShopCategory from "./ShopCategory"; // Correct import

import shoe_slide_1 from "../Components/Assets/shoe_slide_1.png";
import shoe_slide_2 from "../Components/Assets/shoe_slide_2.png";
import shoe_slide_3 from "../Components/Assets/shoe_slide_3.png";
import shoe_slide_4 from "../Components/Assets/shoe_slide_4.png";
import shoe_slide_5 from "../Components/Assets/shoe_slide_5.png";
import shoe_slide_6 from "../Components/Assets/shoe_slide_6.png";

const ShoesPage = () => {
  const shoesSlides = [
    { image: shoe_slide_1 },
    { image: shoe_slide_2 },
    { image: shoe_slide_3 },
    { image: shoe_slide_4 },
    { image: shoe_slide_5 },
    { image: shoe_slide_6 },
  ];

  return <ShopCategory categorySlides={shoesSlides} category="Shoes" />;
};

export default ShoesPage;

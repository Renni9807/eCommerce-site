import React from "react";
import ShopCategory from "./ShopCategory";

import cloth_slide_1 from "../Components/Assets/cloth_slide_1.jpg";
import cloth_slide_2 from "../Components/Assets/cloth_slide_2.jpg";
import cloth_slide_3 from "../Components/Assets/cloth_slide_3.jpg";
import cloth_slide_4 from "../Components/Assets/cloth_slide_4.png";

const ClothesPage = () => {
  const clothesSlides = [
    { image: cloth_slide_1 },
    { image: cloth_slide_2 },
    { image: cloth_slide_3 },
    { image: cloth_slide_4 },
  ];

  return <ShopCategory categorySlides={clothesSlides} category="clothes" />;
};

export default ClothesPage;

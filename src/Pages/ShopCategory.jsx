import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import SlideShow from "../Components/SlideShow/SlideShow";
import "./CSS/ShopCategory.css";

import cloth_slide_1 from "../Components/Assets/cloth_slide_1.jpg";
import cloth_slide_2 from "../Components/Assets/cloth_slide_2.jpg";
import cloth_slide_3 from "../Components/Assets/cloth_slide_3.jpg";
import cloth_slide_4 from "../Components/Assets/cloth_slide_4.png";

const slides = [
  { image: cloth_slide_1 },
  { image: cloth_slide_2 },
  { image: cloth_slide_3 },
  { image: cloth_slide_4 },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Assuming all_product has a height property precomputed
    const initialItems = all_product.map((item) => ({
      ...item,
      height: item.height || Math.floor(Math.random() * 150) + 150, // Provide a random height if not precomputed
    }));
    setItems(initialItems);
  }, [all_product]);

  return (
    <div className="shop-category">
      <SlideShow slides={slides} />
      <div className="shopcategory-indexSort">
        <p>
          <span>{items.length}</span> out of {all_product.length}
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="shopcategory-products"
        columnClassName="shopcategory-products-column"
      >
        {items.map((item, index) => (
          <div
            className="shopcategory-product"
            key={index}
            onClick={() => navigate(`/product/${item.id}`)}
            style={{ height: `${item.height}px` }} // Use precomputed height for each item
          >
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

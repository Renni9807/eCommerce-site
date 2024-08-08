import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import SlideShow from "../Components/SlideShow/SlideShow";
import "./CSS/ShopCategory.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const ShopCategory = ({ categorySlides, banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (all_product && category) {
      const filteredItems = all_product.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setItems(filteredItems);
    }
  }, [all_product, category]);

  return (
    <div className="shop-category">
      {categorySlides && categorySlides.length > 0 ? (
        <SlideShow slides={categorySlides} />
      ) : banner ? (
        <img
          src={banner}
          alt={`${category} banner`}
          className="category-banner"
        />
      ) : null}
      <div className="shopcategory-indexSort">
        <p>
          <span>{items.length}</span> products in {category}
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
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <div className="shopcategory-product-details">
              <div className="shopcategory-product-category">
                {item.category}
              </div>
              <div className="shopcategory-product-price-old">
                ${item.old_price}
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ShopCategory;

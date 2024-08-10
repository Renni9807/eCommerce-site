import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { ShopContext } from "../Context/ShopContext";
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
  const [sortOption, setSortOption] = useState("random"); // 정렬 옵션 상태 추가

  useEffect(() => {
    let filteredItems = all_product.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    // 정렬 로직
    if (sortOption === "highToLow") {
      filteredItems.sort((a, b) => b.old_price - a.old_price);
    } else if (sortOption === "lowToHigh") {
      filteredItems.sort((a, b) => a.old_price - b.old_price);
    } else {
      filteredItems = filteredItems.sort(() => Math.random() - 0.5);
    }

    setItems(filteredItems);
  }, [all_product, category, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

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
          Sort by
          <select id="sort" onChange={handleSortChange} value={sortOption}>
            <option value="random">Random</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="lowToHigh">Price: Low to High</option>
          </select>
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

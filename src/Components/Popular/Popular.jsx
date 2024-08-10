import React from "react";
import { Link } from "react-router-dom";
import "./Popular.css";
import data_product from "../Assets/data";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, index) => (
          <Link to={`/product/${item.id}`} key={index} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <p>{item.name}</p>
              <div className="price-old">${item.old_price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;

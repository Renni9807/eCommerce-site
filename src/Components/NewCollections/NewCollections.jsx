import React from "react";
import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
import { Link } from "react-router-dom";

export const NewCollections = () => {
  return (
    <div id="new-collections" className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, index) => (
          <Link to={`/product/${item.id}`} key={index} className="card">
            <div className="card-content">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <div className="price-old">${item.old_price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

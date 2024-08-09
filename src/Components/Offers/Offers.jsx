import React from "react";
import exclusive from "../Assets/exclusive_offer.png";
import "./Offers.css";

export const Offers = () => {
  const scrollToCollections = () => {
    document
      .getElementById("new-collections")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={scrollToCollections}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="exclusive_img" />
      </div>
    </div>
  );
};

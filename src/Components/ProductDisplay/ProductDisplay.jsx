import React, { useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import Modal from "../Modal/Modal";

export const ProductDisplay = (props) => {
  const { product } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img
            src={product.image}
            alt=""
            onClick={() => openModal(product.image)}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => openModal(product.image)}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => openModal(product.image)}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => openModal(product.image)}
          />
        </div>
        <div className="productdisplay-img">
          <img
            src={product.image}
            alt="img"
            className="productdisplay-main-img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name} </h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} image={modalImage} />
    </div>
  );
};

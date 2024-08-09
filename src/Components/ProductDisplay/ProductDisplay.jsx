import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Modal from "../Modal/Modal";
import "./ProductDisplay.css";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [quantities, setQuantities] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (size, increment) => {
    setQuantities((prev) => ({
      ...prev,
      [size]: Math.max(0, prev[size] + increment),
    }));
  };

  const handleAddToCart = () => {
    const itemsToAdd = Object.keys(quantities).reduce((acc, size) => {
      if (quantities[size] > 0) {
        acc.push({ ...product, quantity: quantities[size], size });
      }
      return acc;
    }, []);

    if (itemsToAdd.length > 0) {
      itemsToAdd.forEach((item) => addToCart(item, item.quantity, item.size));
      setQuantities({
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        XXL: 0,
      });
      alert("Items added to cart successfully");
    } else {
      alert("Please select a quantity for at least one size");
    }
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
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} className="quantity-selector">
              <button onClick={() => handleQuantityChange(size, -1)}>-</button>
              <span>{quantities[size]}</span>
              <button onClick={() => handleQuantityChange(size, 1)}>+</button>
              <span>{size}</span>
            </div>
          ))}
        </div>
        <button id="add-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
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

export default ProductDisplay;

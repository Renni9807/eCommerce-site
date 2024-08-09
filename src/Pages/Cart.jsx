import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Cart.css";

const Cart = () => {
  const { cart, updateCartItem, removeFromCart } = useContext(ShopContext);

  const parsePrice = (price) => {
    // If the price is a string, remove the '$' sign and convert to a number
    if (typeof price === "string") {
      return parseFloat(price.replace("$", ""));
    }
    // If the price is already a number, return it directly
    return price;
  };

  const totalOldPrice = cart.reduce((total, item) => {
    const oldPrice = parsePrice(item.old_price);
    return total + oldPrice * item.quantity;
  }, 0);

  const totalNewPrice = cart.reduce((total, item) => {
    const newPrice = parsePrice(item.new_price);
    return total + newPrice * item.quantity;
  }, 0);

  const handleRemoveItem = (id, size) => {
    const confirmRemove = window.confirm("Do you really want to remove?");
    if (confirmRemove) {
      removeFromCart(id, size);
    }
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <div className="cart-total">
          <p className="cart-old-price">
            <span>Total Old Price:</span> ${totalOldPrice.toFixed(2)}
          </p>
          <p className="cart-new-price">
            <span>Total:</span> ${totalNewPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p className="cart-item-old-price">{item.old_price}</p>
              <p className="cart-item-new-price">{item.new_price}</p>
              <div className="cart-item-controls">
                <button
                  onClick={() =>
                    item.quantity > 1
                      ? updateCartItem(item.id, item.size, item.quantity - 1)
                      : handleRemoveItem(item.id, item.size)
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    updateCartItem(item.id, item.size, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button onClick={() => handleRemoveItem(item.id, item.size)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

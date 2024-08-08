import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Cart.css";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  // Total amount 계산
  const totalNewAmount = cart.reduce(
    (total, item) =>
      total + parseFloat(item.new_price.slice(1)) * item.quantity,
    0
  );
  const totalOldAmount = cart.reduce(
    (total, item) =>
      total + parseFloat(item.old_price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Category: {item.category}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p>New Price: ${item.new_price}</p>
              <p>Old Price: ${item.old_price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total New Price: ${totalNewAmount.toFixed(2)}</p>
        <p>Total Old Price: ${totalOldAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;

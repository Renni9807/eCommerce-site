import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext"; // Adjusted import path
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";

export const Navbar = () => {
  const { cart } = useContext(ShopContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const displayCount = cartItemCount > 9 ? "9+" : cartItemCount;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>LEAP</p>
      </div>
      <ul className="nav-menu">
        {["Shop", "Clothes", "Shoes", "Jewelry"].map((item, index) => (
          <li key={index} className="">
            <Link
              to={
                item.toLowerCase() === "shop" ? "/" : `/${item.toLowerCase()}`
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <div className="cart">
          <Link to="/cart">
            <img id="img-cart" src={cart_icon} alt="cart_icon" />
          </Link>
          {cartItemCount > 0 && (
            <div className="nav-cart-count">{displayCount}</div>
          )}
        </div>
      </div>
    </div>
  );
};

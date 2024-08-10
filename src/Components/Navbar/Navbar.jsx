import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";

export const Navbar = () => {
  const { cart } = useContext(ShopContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const displayCount = cartItemCount > 9 ? "9+" : cartItemCount;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>LEAP</p>
      </div>
      <div className="nav-menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
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

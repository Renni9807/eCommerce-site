import { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [hovered, setHovered] = useState("");
  const handleMouseOn = (index) => {
    setHovered(index);
  };
  const handleMouseOff = () => {
    setHovered("");
  };
  const navMenuItems = ["Shop", "Clothes", "Women", "Kids"];
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo"></img>
        <p>REPPOHS</p>
      </div>
      <ul className="nav-menu">
        {navMenuItems.map((item, index) => (
          <li
            key={index}
            className={hovered === index ? "hovered" : ""}
            onMouseEnter={() => handleMouseOn(index)}
            onMouseLeave={handleMouseOff}
          >
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
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

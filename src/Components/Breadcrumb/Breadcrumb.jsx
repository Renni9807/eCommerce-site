import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ product }) => {
  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link> &gt;
      <Link to={`/${product.category.toLowerCase()}`}>
        {product.category}
      </Link>{" "}
      &gt;
      <Link to={`/product/${product.id}`}>
        <span>{product.name}</span>
      </Link>
    </nav>
  );
};

export default Breadcrumb;

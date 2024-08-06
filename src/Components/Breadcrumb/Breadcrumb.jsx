import "./Breadcrumb.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

function Breadcrumb({ product }) {
  console.log("Breadcrumb product:", product);
  if (!product) {
    return <p>Nothing</p>;
  }

  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="arrow_icon" /> SHOP
      <img src={arrow_icon} alt="arrow_icon" />{" "}
      {product?.category || "Category"}
      <img src={arrow_icon} alt="arrow_icon" /> {product?.name || "Product"}
    </div>
  );
}

export default Breadcrumb;

import "./Breadcrumb.css";
import arrow_icon from "../Assets/arrow.png";

function Breadcrumb(props) {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="arrow_icon" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow_icon" /> {product.category}{" "}
      <img src={arrow_icon} alt="arrow_icon" /> {product.name}
    </div>
  );
}
export default Breadcrumb;

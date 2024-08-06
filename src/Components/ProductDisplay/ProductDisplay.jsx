import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

export const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
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
      </div>
    </div>
  );
};
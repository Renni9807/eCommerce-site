import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import "./CSS/Product.css";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("all_product:", all_product);
    console.log("productId:", productId);

    if (all_product && productId) {
      const foundProduct = all_product.find((e) => e.id === Number(productId));
      console.log("foundProduct:", foundProduct);
      setProduct(foundProduct);
    }
  }, [all_product, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product">
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

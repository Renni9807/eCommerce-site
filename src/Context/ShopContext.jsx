import { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(all_product);
  }, []);

  const contextValue = { all_product: products };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

import React, { createContext, useState, useEffect } from "react";
import allProducts from "../Components/Assets/all_product";

// Creating the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cart, setCart] = useState([]);

  // Setting up the products
  useEffect(() => {
    setAllProduct(allProducts);
  }, []);

  // Adding to cart
  const addToCart = (product, quantity, size) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity, size }]);
  };

  // Updating cart item
  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Providing context value
  const contextValue = { all_product, cart, addToCart, updateCartItem };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

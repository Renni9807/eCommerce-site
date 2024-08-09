import React, { createContext, useState, useEffect } from "react";
import all_products from "../Components/Assets/all_product";

// Creating the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cart, setCart] = useState([]);

  // Setting up the products
  useEffect(() => {
    setAllProduct(all_products);
  }, []);

  // Adding to cart
  const addToCart = (product, quantity, size) => {
    const sizeToAdd = size || "One Size"; // Default to "One Size" if no size is provided
    const existingItem = cart.find(
      (item) => item.id === product.id && item.size === sizeToAdd
    );

    const productToAdd = {
      ...product,
      old_price: product.old_price ? String(product.old_price) : "0",
      new_price: product.new_price ? String(product.new_price) : "0",
      quantity,
      size: sizeToAdd,
    };

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id && item.size === sizeToAdd
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, productToAdd]);
    }
  };

  // Updating cart item
  const updateCartItem = (productId, size, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Removing cart item
  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Providing context value
  const contextValue = {
    all_product,
    cart,
    addToCart,
    updateCartItem,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

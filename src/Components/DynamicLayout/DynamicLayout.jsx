import React, { useState, useEffect, useCallback } from "react";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";
import "./DynamicLayout.css";

export const DynamicLayout = () => {
  const [items, setItems] = useState([]);
  const [layoutFixed, setLayoutFixed] = useState(false);

  useEffect(() => {
    setItems(data_product.slice(0, 20)); // Initial load of 20 items
  }, []);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      layoutFixed
    ) {
      return;
    }

    setItems((prevItems) => [
      ...prevItems,
      ...data_product.slice(prevItems.length, prevItems.length + 10),
    ]);
  }, [layoutFixed]);

  useEffect(() => {
    if (!layoutFixed) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [layoutFixed, handleScroll]);

  useEffect(() => {
    if (items.length >= data_product.length) {
      setLayoutFixed(true); // Lock the layout once all items are loaded
    }
  }, [items]);

  return (
    <div className={`dynamic-layout ${layoutFixed ? "fixed" : ""}`}>
      {items.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  );
};

import { useState, useEffect } from "react";

const useProductAttributes = (initialQuantity = 0, initialColor = "") => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [color, setColor] = useState(initialColor);
  const [isOutOfStock, setIsOutOfStock] = useState(Math.random() < 0.5);
  const [isFastDelivery, setIsFastDelivery] = useState(Math.random() < 0.5);

  useEffect(() => {
    console.log("isOutOfStock changed:", isOutOfStock);
  }, [isOutOfStock]);

  useEffect(() => {
    console.log("isFastDelivery changed:", isFastDelivery);
  }, [isFastDelivery]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return { 
    quantity, 
    color, 
    handleQuantityChange, 
    handleColorChange, 
    isOutOfStock, 
    isFastDelivery, 
    setQuantity, 
    setColor 
  };
};

export default useProductAttributes;

// src/components/ShoppingCart.js
import React from "react";
import { useCart } from "../context/CartContextProvider";
import CartItem from "./CartItem"; // Ensure this component is correctly imported
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const { cart } = useCart(); // Access cart from context

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty!</div>;
  }

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ShoppingCart;

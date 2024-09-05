import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { CartItem } from "../components/CartItem";

export const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      {cart.map((p) => (
        <CartItem product={p}></CartItem>
      ))}
    </div>
  );
};

export default ShoppingCart;

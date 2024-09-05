import React, { createContext, useEffect, useReducer } from "react";
import CartReducer from "./CartContextReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

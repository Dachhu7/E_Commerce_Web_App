import React, { createContext, useReducer, useContext } from 'react';

// Initialize the context
const CartContext = createContext();

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.product, quantity: 1 }];
    case "INCREASE_QUANTITY":
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0); // Remove items with zero quantity
    case "REMOVE":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

// CartContextProvider component
const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart')) || []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };

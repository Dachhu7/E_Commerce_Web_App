// src/context/CartContextProvider.js
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if the item is already in the cart
      const existingItemIndex = state.findIndex(item => item.id === action.product.id);
      if (existingItemIndex >= 0) {
        // If item exists, update quantity
        const updatedCart = state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
        return updatedCart;
      }
      // If item does not exist, add new item to the cart
      return [...state, action.product];
      
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
      
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      
    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

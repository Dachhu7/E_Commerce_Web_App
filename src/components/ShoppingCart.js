import React from "react";
import { useCart } from "../context/CartContextProvider";
import CartItem from "../components/CartItem"; // Ensure this component is correctly imported
import "../styles/ShoppingCart.css";

// Define the conversion rate (1 USD to INR)
const USD_TO_INR_CONVERSION_RATE = 82;

const ShoppingCart = () => {
  const { cart } = useCart(); // Access cart from context

  // Calculate total price in rupees
  const totalPriceInRupees = cart.reduce((total, item) => total + (item.price * item.quantity * USD_TO_INR_CONVERSION_RATE), 0);

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty!</div>;
  }

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          product={item}
        />
      ))}
      <div className="cart-summary">
        <h5>Total Price: ₹{totalPriceInRupees.toFixed(2)}</h5>
        <button className="btn btn-warning w-100 mb-3" onClick={() => alert('Checkout functionality not implemented')}>
          <i className="fa fa-shopping-cart"></i> Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;

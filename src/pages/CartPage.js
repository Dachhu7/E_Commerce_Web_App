import React from "react";
import { useCart } from "../context/CartContextProvider";
import "../styles/CartPage.css"; // Ensure you have styles for CartPage

const CartPage = () => {
  const { cart } = useCart(); // Use useCart

  // Calculate total items and price
  const totalItem = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const totalPrice = cart.reduce((acc, item) => {
    if (item.price && item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);
  const totalPriceInRupees = totalPrice * 82; // Conversion rate to INR

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image || "default-image-url"} alt={item.title || "No title"} className="cart-item-image" />
            <div className="item-details">
              <h4>{item.title || "No title"}</h4>
              <p>Quantity: {item.quantity || 0}</p>
              <p>Price: ${item.price ? item.price.toFixed(2) : "0.00"}</p> {/* Display price with fallback */}
              <p>Total: ${item.price && item.quantity ? (item.price * item.quantity).toFixed(2) : "0.00"}</p> {/* Display total price for the item */}
            </div>
            <button className="btn btn-danger">Remove</button>
          </div>
        ))}
      </div>
      <div className="summary">
        <h5>Total Items: {totalItem}</h5>
        <h5>Total Price: ₹{totalPriceInRupees.toFixed(2)}</h5> {/* Display total price in INR */}
      </div>
    </div>
  );
};

export default CartPage;

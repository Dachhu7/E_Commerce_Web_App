// src/pages/CartPage.js
import React from "react";
import { useCart } from "../context/CartContextProvider";
import ShoppingCart from "../components/ShoppingCart"; // Correct import
import "../styles/CartPage.css"; // Ensure you have styles for CartPage
import { Link } from "react-router-dom";

const CONVERSION_RATE = 82; // Example rate, 1 USD = 82 INR

const CartPage = () => {
  const { cart } = useCart(); // Use useCart

  // Calculate total items and price
  const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPriceInRupees = totalPrice * CONVERSION_RATE;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-lg-8 mb-4">
          <ShoppingCart /> {/* Display cart items */}
        </div>
        <div className="col-12 col-lg-4">
          <div className="summary p-3">
            <h5>
              Total Items: <b>{totalItem}</b>
            </h5>
            <h5>
              Total Price: <b>₹{totalPriceInRupees.toFixed(2)}</b>
            </h5>
            <button className="btn btn-warning w-100 mb-3">
              <i className="fa fa-shopping-cart"></i> Checkout
            </button>
            <Link to="/" className="btn btn-secondary w-100">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

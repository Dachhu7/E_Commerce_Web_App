import React from "react";
import { useCart } from "../context/CartContextProvider";
import "../styles/CartPage.css"; // Ensure you have styles for CartPage
import CartItem from "../components/CartItem"; // Ensure this is imported

const CartPage = () => {
  const { cart } = useCart(); // Use useCart

  // Define conversion rate (1 USD to INR)
  const USD_TO_INR_CONVERSION_RATE = 82;

  // Calculate total items and price
  const totalItem = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const totalPrice = cart.reduce((acc, item) => {
    if (item.price && item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);
  const totalPriceInRupees = totalPrice * USD_TO_INR_CONVERSION_RATE;

  const handleBuy = () => {
    alert('Buy functionality not implemented');
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <div className="summary">
        <h5>Total Items: {totalItem}</h5>
        <h5>Total Price: ₹{totalPriceInRupees.toFixed(2)}</h5> {/* Display total price in INR */}
        <button className="btn-buy" onClick={handleBuy}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;

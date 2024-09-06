import React from "react";
import { useCart } from "../context/CartContextProvider";
import "../styles/CartItem.css";

// Define the conversion rate (1 USD to INR)
const USD_TO_INR_CONVERSION_RATE = 82;

export const CartItem = ({ product }) => {
  const { dispatch } = useCart();

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  // Convert the price to rupees
  const priceInRupees = product.price * USD_TO_INR_CONVERSION_RATE;

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h4>{product.title}</h4>
        <h5>₹{priceInRupees.toFixed(2)}</h5>
        <div className="quantity-buttons">
          <button className="btn btn-outline-dark" onClick={() => decreaseQuantity(product.id)}>
            <b>-</b>
          </button>
          <button className="quantity-display">{product.quantity}</button>
          <button className="btn btn-outline-dark" onClick={() => increaseQuantity(product.id)}>
            <b>+</b>
          </button>
        </div>
        <button className="btn-remove" onClick={() => remove(product.id)}>
          Remove
        </button>
        <button className="btn-buy" onClick={() => alert('Buy functionality not implemented')}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default CartItem;

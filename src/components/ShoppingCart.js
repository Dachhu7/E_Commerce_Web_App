import React from "react";

const CONVERSION_RATE = 83;

export const CartItem = ({ product }) => {
  const { name, priceInDollars } = product;
  const priceInRupees = (priceInDollars * CONVERSION_RATE).toFixed(2);

  return (
    <div className="cart-item">
      <h2>{name}</h2>
      <p>Price: ₹{priceInRupees}</p>
    </div>
  );
};

export default CartItem;

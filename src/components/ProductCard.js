// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContextProvider';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  // Convert price from dollars to rupees (assuming 1 USD = 83 INR)
  const priceInRupees = (product.price * 83).toFixed(2);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', product: { ...product, quantity: 1 } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE', id: product.id });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <h5 className="originalPrice">₹{priceInRupees}</h5>
        <div className="product-actions">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={handleRemoveFromCart}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Original Price: {product.originalPrice}</p>
      <p>Offer Price: {product.offerPrice}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductItem;

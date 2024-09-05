import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="card text-center">
        <img src={product.image} alt={product.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.title.substring(0, 68)}</h5>
          <p className="card-text">{product.price}</p> {/* Display price in rupees */}
          <div className="buttons">
            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline-dark"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

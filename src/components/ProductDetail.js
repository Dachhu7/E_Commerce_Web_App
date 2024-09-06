// src/components/ProductDetail.js
import React, { useEffect, useState } from "react"; // Removed unused `useContext`
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/CartContextProvider"; // Use the correct custom hook
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart(); // Access dispatch from useCart

  useEffect(() => {
    fetchProductById(id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Convert price from dollars to rupees
  const conversionRate = 83; // Example conversion rate
  const priceInRupees = product.price * conversionRate;

  // Format price as Indian Rupee
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(priceInRupees);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", product: { ...product, quantity: 1 } });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-row">
        <div className="product-image-col">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-info-col">
          <h4 className="product-category">{product.category}</h4>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-rating">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="product-price">{formattedPrice}</h3>
          <p className="product-description">{product.description}</p>
          <button
            className="btn btn-outline-dark go-to-cart-btn"
            onClick={handleAddToCart} // Correctly use the handleAddToCart function
          >
            <i className="fa fa-shopping-cart"></i> Add to Cart
          </button>
          <Link to={`/cart`} className="btn btn-outline-dark go-to-cart-btn">
            Go to Cart
          </Link>
          <Link to={`/`} className="btn btn-outline-dark continue-btn">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

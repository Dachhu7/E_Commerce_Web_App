import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContextProvider';

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available. Please add some!</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Original Price: ₹{product.originalPrice}</p>
            <p>Offer Price: ₹{product.offerPrice}</p>

            {product.seller && (
              <>
                <h3>Seller: {product.seller.name}</h3>
                <img src={product.seller.logo} alt={product.seller.name} className="seller-logo" />
                <p>Rating: {product.seller.rating}/5</p>
                <p>Warranty: {product.seller.warranty}</p>
              </>
            )}

            {/* Review Section */}
            <div className="product-reviews">
              <h4>Reviews</h4>
              {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <img src={review.image} alt={review.title} className="review-image" />
                    <h5>{review.title}</h5>
                    <p>{review.shortDescription}</p>
                  </div>
                ))
              ) : (
                <p>No reviews available for this product.</p>
              )}
            </div>

            {/* Add to Cart Button */}
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;

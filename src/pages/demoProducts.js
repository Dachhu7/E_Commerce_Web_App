import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import mockProducts from '../mockProducts'; // Import the mock products
import '../styles/HomePage.css'; // Assuming HomePage.css contains the styles you need

const DemoProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate a fetch request
    setProducts(mockProducts);
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <h1>E-Commerce Web App</h1>
        <div className="header-buttons">
          <Link to="/cart">
            <button className="btn btn-cart">Cart</button>
          </Link>
          <Link to="/add-product">
            <button className="btn btn-primary">Add Product</button>
          </Link>
        </div>
      </div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DemoProduct;

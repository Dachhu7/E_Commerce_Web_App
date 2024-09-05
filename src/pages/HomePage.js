// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { demoProducts } from '../pages/demoProducts'; // Ensure this path matches your project structure


const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Product List</h1>
      <Link to="/add-product">
        <button className="btn btn-primary">Add Product</button>
      </Link>
      <ProductList products={demoProducts} /> {/* Pass demo products */}
    </div>
  );
};

export default HomePage;

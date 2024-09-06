// src/pages/HomePage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = ({ products }) => {
  // Define some realistic demo products
  const demoProducts = [
    {
      id: 1,
      title: 'Wireless Bluetooth Headphones',
      price: 89.99,
      description: 'High-quality wireless Bluetooth headphones with noise-cancelling feature and long battery life.',
      image: '/demo1.jpeg'
    },
    {
      id: 2,
      title: 'Smart Watch',
      price: 199.99,
      description: 'Advanced smart watch with fitness tracking, heart rate monitor, and notifications.',
      image: '/watch.jpeg'
    },
    {
      id: 3,
      title: '4K Ultra HD TV',
      price: 599.99,
      description: '55-inch 4K Ultra HD TV with vibrant colors and high-definition clarity.',
      image: '/Tv.jpeg'
    },
    {
      id: 4,
      title: 'Portable Power Bank',
      price: 29.99,
      description: 'Compact power bank with 10000mAh capacity to keep your devices charged on the go.',
      image: '/PowerBank.jpeg'
    },
    {
      id: 5,
      title: 'Ergonomic Office Chair',
      price: 149.99,
      description: 'Comfortable and adjustable office chair with lumbar support and breathable mesh.',
      image: '/Chair.jpeg'
    }
  ];

  // Combine demo products with real products
  const combinedProducts = [...demoProducts, ...products];

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
        {combinedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

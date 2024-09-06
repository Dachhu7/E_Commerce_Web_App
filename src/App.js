// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AddProductForm from './pages/AddProductForm';
import SearchBar from './components/MenuBar';
import { CartProvider } from './context/CartContextProvider'; // Import CartProvider

const App = () => {
  const [products, setProducts] = useState([]); // State for product list

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <CartProvider>
      <Router>
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add-product" element={<AddProductForm onAddProduct={handleAddProduct} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

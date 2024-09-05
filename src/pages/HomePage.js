import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const HomePage = ({ products }) => {
  return (
    <div className="home-page">
      <h1>Product List</h1>

      {/* Add Product Button */}
      <Link to="/add-product">
      <button className="btn btn-primary">Add Product</button>
      </Link>


      {/* Pass products to ProductList */}
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;

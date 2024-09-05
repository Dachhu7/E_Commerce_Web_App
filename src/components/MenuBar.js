// src/components/MenuBar.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContextProvider"; // Use useCart instead of CartContext
import "../styles/MenuBar.css"; 

function SearchBar() {
  const { cart } = useCart(); // Use useCart to access cart context
  return (
    <div className="sticky-navbar"> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            E-Commerce Web App
          </a>

          <div className="cart">
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart"></i> Cart {cart.length}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;

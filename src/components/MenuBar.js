import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import "../styles/MenuBar.css"; 

function SearchBar() {
  const { cart } = useContext(CartContext);
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


import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { ShoppingCart } from "../components/ShoppingCart";
import { totalItem, totalPrice } from "../context/CartContextReducer";
import "../styles/Summary.css";
import { Link } from "react-router-dom";

const CONVERSION_RATE = 83; // 1 USD = 83 INR

const CartPage = () => {
  const { cart } = useContext(CartContext);
  
  // Convert total price from dollars to rupees
  const totalPriceInDollars = totalPrice(cart);
  const totalPriceInRupees = (totalPriceInDollars * CONVERSION_RATE).toFixed(2);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-lg-8 mb-4">
          <ShoppingCart />
        </div>
        <div className="col-12 col-lg-4">
          <div className="summary p-3">
            <h5>
              Total Items: <b>{totalItem(cart)}</b>
            </h5>
            <h5>
              Total Price: <b>₹{totalPriceInRupees}</b>
            </h5>
            <button className="btn btn-warning w-100 mb-3">
              <i className="fa fa-shopping-cart"></i> Checkout
            </button>
            <Link to={`/`} className="btn btn-secondary w-100">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductItem from "./ProductItem";
import Filter from "./Filters";
import SearchBar from "./ProductSearch";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
      const uniqueCategories = [
        ...new Set(response.data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleFilter = (category, priceRange) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          (category ? product.category === category : true) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
      )
    );
  };

  const handleClearFilters = () => {
    setFilteredProducts(products);
  };

  const handleSearch = (query) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // Conversion rate and formatting
  const conversionRate = 83; // Example conversion rate

  const formatPriceInRupees = (price) => {
    const priceInRupees = price * conversionRate;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(priceInRupees);
  };

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center align-items-center mb-4">
        <div className="col-md-6 col-lg-auto mb-2 mb-md-0">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="col-md-6 col-lg-auto">
          <Filter
            categories={categories}
            onFilter={handleFilter}
            onClear={handleClearFilters}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Available Products</h1>
        </div>
      </div>

      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12">
            <p>No products available. Try adjusting your filters or search.</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
              <ProductItem
                product={{
                  ...product,
                  price: formatPriceInRupees(product.price),
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
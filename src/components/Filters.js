import React, { useState } from "react";
import "../styles/Filters.css";

const Filter = ({ categories, onFilter, onClear }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleFilterClick = () => {
    const min = minPrice === "" ? 0 : parseFloat(minPrice);
    const max = maxPrice === "" ? Infinity : parseFloat(maxPrice);
    onFilter(selectedCategory, [min, max]);
  };

  const handleClearClick = () => {
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
    onClear();
  };

  return (
    <div className="filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        placeholder="Min Price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        placeholder="Max Price"
      />
      <button onClick={handleFilterClick}>Filter</button>
      <button onClick={handleClearClick}>Clear Filters</button>
    </div>
  );
};

export default Filter;

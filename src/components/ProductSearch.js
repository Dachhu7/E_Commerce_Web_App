import React from "react";
import "../styles/SearchBox.css";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      className="search-box"
      placeholder="Search Products"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

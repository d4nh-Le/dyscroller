// src/components/SearchContainer.js
import React from 'react';
import './SearchContainer.css'; // Import corresponding CSS file

function SearchContainer() {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
  );
}

export default SearchContainer;

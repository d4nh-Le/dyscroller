import React, { useState } from 'react';

const SearchScreen = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const addSearchItem = () => {
    if (searchInput.trim()) {
      setSearchItems([...searchItems, searchInput.trim()]);
      setSearchInput('');
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addSearchItem()}
        />
        <button className="icon-button" onClick={addSearchItem}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="content-container">
        <ul>
          {searchItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchScreen;

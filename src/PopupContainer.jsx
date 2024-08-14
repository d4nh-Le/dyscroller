// src/components/PopupContainer.js
import React, { useEffect, useRef } from 'react';
import './PopupContainer.css'; // Import corresponding CSS file

function PopupContainer() {
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    // Load content for search and todo screens
    fetch('search.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('searchContent').innerHTML = data;
      });

    fetch('todo.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('todoContent').innerHTML = data;
      });
  }, []);

  const handleToggleChange = (event) => {
    if (event.target.checked) {
      contentWrapperRef.current.style.transform = 'translateX(-50%)'; // Slide to todo screen
    } else {
      contentWrapperRef.current.style.transform = 'translateX(0)'; // Slide back to search screen
    }
  };

  return (
    <div className="popup-container">
      <div className="content-wrapper" ref={contentWrapperRef}>
        <div className="screen" id="screen1">
          <div id="searchContent"></div>
        </div>
        <div className="screen" id="screen2">
          <div id="todoContent"></div>
        </div>
      </div>

      <div className="slider-container">
        <label className="switch">
          <input type="checkbox" id="toggle" onChange={handleToggleChange} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default PopupContainer;

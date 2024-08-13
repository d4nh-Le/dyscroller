import React from 'react';

const Switch = ({ onChange }) => (
  <div className="slider-container">
    <label className="switch">
      <input type="checkbox" onChange={onChange} />
      <span className="slider"></span>
    </label>
  </div>
);

export default Switch;
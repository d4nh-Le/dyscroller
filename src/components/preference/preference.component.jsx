import './preference.component.css';
import React, { useState } from 'react';

export default function Preference({onNext}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <div className="preference-form-container">
          <div className="logo-container">
            Preferences
          </div>
    
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Editing username:</label>
              <div className="username-container">
              <input type="text" id="username" name="username" placeholder="Enter your username" required/>
              <button className="form-submit-btn" type="submit" onClick={onNext}>Save</button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Editing doom scroll limit:</label>
              <div className="username-container">
              
              <div className="radio-group">
                <label className={`form-submit-btn ${selectedOption === '1' ? 'selected' : ''}`}>
                    <input type="radio" value="1" checked={selectedOption === '1'} onChange={handleOptionChange}/> 1
                </label>
                <label className={`form-submit-btn ${selectedOption === '2' ? 'selected' : ''}`}>
                    <input type="radio" value="2" checked={selectedOption === '2'} onChange={handleOptionChange}/> 2
                </label>
                <label className={`form-submit-btn ${selectedOption === '5' ? 'selected' : ''}`}>
                    <input type="radio" value="5" checked={selectedOption === '5'} onChange={handleOptionChange}/> 5
                </label>
            </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Editing doom scroll websites:</label>
              <div className="username-container">
              <input type="text" id="username" name="username" placeholder="Enter your username" required/>
              <button className="form-submit-btn" type="submit" onClick={onNext}>Save</button>
              </div>
            </div>
          </form>
    
          <p className="github-link">
            <a href="https://github.com/d4nh-Le/dyscroller" className="github-link link" target='_blank'>Visit Dyscroller Github!</a>
          </p>
        </div>
      );
}


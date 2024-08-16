import './preference.component.css';
import React, { useState } from 'react';

export default function Preference() {
    return (
        <div className="preference-form-container">
          <div className="logo-container">
            Preferences
          </div>
    
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required/>
            </div>
    
            <button className="form-submit-btn" type="submit">Get Started</button>
          </form>
    
          <p className="github-link">
            <a href="https://github.com/d4nh-Le/dyscroller" className="github-link link" target='_blank'>Visit Dyscroller Github!</a>
          </p>
        </div>
      );
}


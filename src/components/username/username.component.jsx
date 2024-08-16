import './username.component.css';
import React from 'react';

export default function Username() {
    return (
        <div className="form-container">
      <div className="logo-container">
        Welcome to Dyscroller
      </div>

      <form className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required=""></input>
        </div>

        <button className="form-submit-btn" type="submit">Get Started</button>
      </form>

      <p className="github-link">
        <a href="https://github.com/d4nh-Le/dyscroller" className="github-link link" target='_blank'>Visit Dyscroller Github!</a>
      </p>
    </div>
    );
    }


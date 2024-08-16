import './username.component.css';
import React, { useState } from 'react';

export default function Username({ onNext }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      chrome.storage.local.get(['preferences'], (result) => {
        const preferences = result.preferences || {};
        preferences.name = username;
        preferences.firstTime = false;
        chrome.storage.local.set({ preferences: preferences }, () => {
          console.log('Username is updated in local storage:', username);
          if (typeof onNext === 'function') {
            onNext();
        } else {
            console.error('onNext is not a function');
        }
          chrome.storage.local.get(['preferences'], (result) => {
            console.log('Updated preferences:', result.preferences);
          });
          chrome.storage.local.get(['tasks'], (result) => {
            console.log('Updated preferences:', result.tasks);
        });
          chrome.storage.local.get(['url'], (result) => {
            console.log('Updated preferences:', result.url);
          });
        });
      });
    }
  };

  return (
    <div className="username-form-container">
      <div className="logo-container">
        Welcome to Dyscroller
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button className="form-submit-btn" type="submit">Get Started</button>
      </form>

      <p className="github-link">
        <a href="https://github.com/d4nh-Le/dyscroller" className="github-link link" target='_blank'>Visit Dyscroller Github!</a>
      </p>
    </div>
  );
}
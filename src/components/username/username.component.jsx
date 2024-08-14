import './username.component.css';
import React from 'react';

export default function Username() {
    return (
        <div class="form-container">
      <div class="logo-container">
        Welcome to Dyscroller
      </div>

      <form class="form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required=""></input>
        </div>

        <button class="form-submit-btn" type="submit">Get Started</button>
      </form>

      <p class="github-link">
        <a href="https://github.com/d4nh-Le/dyscroller" class="github-link link" target='_blank'>Visit Dyscroller Github!</a>
      </p>
    </div>
    );
    }


// src/App.js
import React from 'react';
import PopupContainer from './components/PopupContainer';
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer';
import TasksContainer from './components/TasksContainer';
import './App.css'; // Import any global CSS

function App() {
  return (
    <div className="App">
      <Navbar />
      <PopupContainer />
    </div>
  );
}

export default App;

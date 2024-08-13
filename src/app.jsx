import React, { useState } from 'react';
import navbar from './components/navbar';
import SearchScreen from './components/SearchScreen';
import TodoScreen from './components/TodoScreen';
import Switch from './components/Switch';
import './styles.css';

function App() {
  const [showTodoScreen, setShowTodoScreen] = useState(false);

  return (
    <div className="popup-container">
      <div className="content-wrapper" style={{ transform: showTodoScreen ? 'translateX(-50%)' : 'translateX(0)' }}>
        <div className="screen">
          <SearchScreen />
        </div>
        <div className="screen">
          <TodoScreen />
        </div>
      </div>
      <Switch onChange={() => setShowTodoScreen(!showTodoScreen)} />
    </div>
  );
}

export default App;

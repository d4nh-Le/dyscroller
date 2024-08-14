// src/components/TasksContainer.js
import React from 'react';
import './TasksContainer.css'; // Import corresponding CSS file

function TasksContainer() {
  return (
    <div className="tasks-container">
      <input type="text" className="tasks-input" placeholder="Input tasks..." />
    </div>
  );
}

export default TasksContainer;

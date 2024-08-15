import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faList, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./popup.css";

function Popup() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="overlay">
      <div className="popup-box">
        <div className="popup-header">
          <span className="popup-title">Dyscroller</span>
          <span className="popup-subtitle">Website-Adder</span>
          <div className="popup-icons">
            <FontAwesomeIcon icon={faUser} className="header-icon" />
            <FontAwesomeIcon icon={faCog} className="header-icon" />
            <Link to="/newpage">
              <FontAwesomeIcon icon={faList} className="header-icon" />
            </Link>
          </div>
        </div>
        <div className="popup-content">
          <div className="search-bar-container">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="search-bar"
              placeholder="Add a website"
              onKeyDown={handleKeyDown} // Add onKeyDown handler
            />
            <button className="add-button" onClick={handleAddTask}>+</button>
          </div>
          <div className="todo-container">
            {tasks.map((task, index) => (
              <div key={index} className="todo-item">
                <img src="https://via.placeholder.com/40" alt="Placeholder" className="todo-image" />
                <span className="todo-text">{task}</span>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="todo-delete"
                  onClick={() => handleDeleteTask(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

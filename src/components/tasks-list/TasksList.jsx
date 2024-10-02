import './TasksList.css';
import React, { useState, useEffect } from "react";

import { saveData, getData, removeData } from "../../utils";

export default function TasksList({ navigateTo }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData("tasks", (tasksResult) => setTasks(tasksResult));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const button = document.querySelector('.username-container .form-submit-btn');
        if (button) {
          button.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        description: task.trim(),
        isDone: false,
      };

      saveData("tasks", newTask, () => getData("tasks", (tasksResult) => setTasks(tasksResult)));
      setTask("");
    }
  };

  const renderList = () => {
    if (tasks && tasks.length) {
      return (
        <div className='task-container'>
          <div className='task-scroller'>
          <ul className="custom-ul">
            {tasks.map((task, index) => (

              <li key={"task-" + index} className='task-item'>
                {task.description}
                <button className='remove-btn' onClick={() => removeData("tasks", task.description, "description", () => getData("tasks", (tasksResult) => setTasks(tasksResult)))}>
                  Complete
                </button>
              </li>

            ))}
          </ul>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="tasklist-form-container">
      <div className="navigation-btns">
        <button className="form-submit-btn" type="button" onClick={() => navigateTo('urlForm')}>URLs</button>
        <button className="form-submit-btn" type="button" onClick={() => navigateTo('preference')}>Preference</button>

      </div>
      <div className="logo-container">
        Your Tasks
      </div>

      <form className="form">
        <div className="form-group">
          <label htmlFor="username">Add tasks:</label>
          <div className="username-container">
            <input type="text" value={task} onChange={({ target }) => setTask(target.value)} placeholder="Enter a new task" />
            <button className="form-submit-btn" type="button" onClick={handleAddTask}>Add task</button>
          </div>
        </div>
      </form>
      {renderList()}
    </div>
  );
};
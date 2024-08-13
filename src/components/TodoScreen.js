import React, { useState } from 'react';

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput.trim(), completed: false }]);
      setTaskInput('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          className="tasks-input"
          placeholder="Input tasks..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="icon-button" onClick={addTask}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="content-container">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() =>
                  setTasks(
                    tasks.map((t, i) =>
                      i === index ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <label>{task.text}</label>
              <button className="icon-button" onClick={() => removeTask(index)}>
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoScreen;

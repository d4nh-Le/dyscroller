import React, { useState, useEffect } from "react";

import { saveData, getData, removeData } from "../../utils";

const TasksList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData("tasks", (tasksResult) => setTasks(tasksResult));
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
        <ul>
          {tasks.map((task, index) => (
            <li key={"task-" + index}>
              {task.description}
              <button 
                onClick={
                  () => removeData(
                    "tasks",
                    task.description,
                    "description",
                    () => getData("tasks", (tasksResult) => setTasks(tasksResult))
                  )
                }
              >
                I'm done
              </button>
            </li>
          ))}
        </ul>
      );
    }
  };

  const renderAddTaskBtn = () => (
    <button onClick={handleAddTask}>Add Task</button>
  );

  const renderAddTaskInput = () => (
    <input
      type="text"
      value={task}
      onChange={({ target }) => setTask(target.value)}
      placeholder="Enter a new task"
    />
  );

  return (
    <div>
      {renderAddTaskInput()}
      {renderAddTaskBtn()}
      {renderList()}
    </div>
  );
};

export default TasksList;
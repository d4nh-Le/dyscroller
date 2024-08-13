document.addEventListener("DOMContentLoaded", function () {
  // Load search.html content into the #searchContent div
  fetch('search.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('searchContent').innerHTML = data;
    });

  // Load todo.html content into the #todoContent div
  fetch('todo.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('todoContent').innerHTML = data;

      // Now that todo.html is loaded, set up event listeners
      setupTodoListeners();
    });

  // Handle screen toggle logic
  const toggle = document.getElementById('toggle');
  const contentWrapper = document.getElementById('contentWrapper');

  if (toggle) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        contentWrapper.style.transform = 'translateX(-50%)'; // Slide to todo screen
      } else {
        contentWrapper.style.transform = 'translateX(0)'; // Slide back to search screen
      }
    });
  }
});

function setupTodoListeners() {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (addTaskButton && taskInput && taskList) {
    function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
        const taskItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        const taskLabel = document.createElement('label');
        const deleteButton = document.createElement('button');

        taskCheckbox.type = 'checkbox';
        taskCheckbox.className = 'task-checkbox';
        taskLabel.textContent = taskText;

        deleteButton.className = 'icon-button';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
          taskItem.remove();
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = "";
      }
    }

    addTaskButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
      }
    });
  } else {
    console.log("One or more elements are missing in todo.html.");
  }
}

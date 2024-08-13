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
    });

  // Handle screen toggle logic
  const toggle = document.getElementById('toggle');
  const contentWrapper = document.getElementById('contentWrapper');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      contentWrapper.style.transform = 'translateX(-50%)'; // Slide to todo screen
    } else {
      contentWrapper.style.transform = 'translateX(0)'; // Slide back to search screen
    }
  });
});

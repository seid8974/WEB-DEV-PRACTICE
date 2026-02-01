// Select HTML elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const taskList = document.getElementById('taskList');
const toggleDark = document.querySelector('.toggle-dark');
const searchInput = document.getElementById('searchInput');

// Array to store tasks from the backend
let tasks = [];

// 1️⃣ Load tasks from the backend
async function loadTasks() {
  try {
    const res = await fetch('/'); // Replace with your backend endpoint
    tasks = await res.json();          // Expecting JSON array from backend
    renderTasks();
  } catch (err) {
    console.error('Failed to load tasks:', err);
  }
}

// 2️⃣ Render tasks on the page
function renderTasks(filter = '') {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    if (!task.title.toLowerCase().includes(filter.toLowerCase())) return;

    const li = document.createElement('li');
    li.textContent = task.title;

    // Strike-through if completed
    if (task.completed) li.style.textDecoration = 'line-through';

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.addEventListener('click', async () => {
      task.completed = !task.completed;
      try {
        await fetch(`/${task.id}`, {  // Update task in backend
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(task)
        });
        loadTasks(); // Reload tasks
      } catch (err) {
        console.error('Failed to update task:', err);
      }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.addEventListener('click', async () => {
      try {
        await fetch(`/${task.id}`, { method: 'DELETE' }); // Delete from backend
        loadTasks(); // Reload tasks
      } catch (err) {
        console.error('Failed to delete task:', err);
      }
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// 3️⃣ Add new task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (!title) return alert('Enter a task!');

  const newTask = { title, priority, completed: false };

  try {
    await fetch('/', { // Add task to backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    });
    taskInput.value = '';
    loadTasks(); // Reload tasks
  } catch (err) {
    console.error('Failed to add task:', err);
  }
});

// 4️⃣ Search tasks
searchInput.addEventListener('input', () => renderTasks(searchInput.value));

// 5️⃣ Dark mode toggle
toggleDark.addEventListener('click', () => document.body.classList.toggle('dark'));

// Load tasks when page loads
loadTasks();

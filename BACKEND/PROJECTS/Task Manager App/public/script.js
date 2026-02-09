/* =========================
   App State
========================= */
let tasks = [];
let currentFilter = 'all';
let searchTerm = '';
let selectedTag = '';
let currentEditTaskId = null;
let isDark = false;

const api = '/api/tasks';

/* =========================
   Init
========================= */
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    setupEventListeners();
    updateHeader();
    await loadTasks();
    render();
    setInterval(updateHeader, 60000);
});

/* =========================
   API Calls
========================= */
async function loadTasks() {
    try {
        const res = await fetch(api);
        tasks = await res.json();
    } catch (err) {
        console.error('Failed to load tasks:', err);
    }
}

async function loadSpecificTasks(e) {
    try {
        const res = await fetch(`${api}/${id}`);
        tasks = await res.json();
    } catch (err) {
        console.error('Failed to load tasks:', err);
    }
}
async function createTask(name) {
    try {
        const res = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const task = await res.json(); // ✅ read ONCE
        tasks.push(task);
        console.log(task);
    } catch (err) {
        console.error('Failed to create task:', err);
    }
}


async function updateTask(id, data) {
    try {
        await fetch(`${api}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (err) {
        console.error('Failed to update task:', err);
    }
}

async function deleteTask(id) {
    try {
        await fetch(`${api}/${id}`, { method: 'DELETE' });
    } catch (err) {
        console.error('Failed to delete task:', err);
    }
}

async function clearCompleted() {
    try {
        await fetch(`${api}/completed`, { method: 'DELETE' });
        tasks = tasks.filter(t => !t.completed);
    } catch (err) {
        console.error('Failed to clear completed tasks:', err);
    }
}

/* =========================
   Theme
========================= */
function initTheme() {
    isDark =
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateThemeUI();
}

function updateThemeUI() {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document
        .getElementById('themeIcon')
        .setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
}

/* =========================
   Events
========================= */
function setupEventListeners() {
    // Create task
    document.getElementById('taskForm').addEventListener('submit', async e => {
        e.preventDefault();
        
        const input = document.getElementById('taskInput');
        const name = input.value.trim();
        if (!name) return;
        await createTask(name);
        input.value = '';
        render();
    });

    // Search input
    document.getElementById('searchInput').addEventListener('input', async (e) => {
        searchTerm = e.target.value.toLowerCase();
        await loadSpecificTasks();
        render();
    });

    document.getElementById('clearBtn').addEventListener('click', async () => {
        const doneTasks = tasks.filter(t => !t.active);

        for (const task of doneTasks) {
            await deleteTask(task._id);
        }

        tasks = tasks.filter(t => t.active);
        render();
    });

    // Clear completed
    document.getElementById('clearBtn').addEventListener('click', async () => {
        await clearCompleted();
        render();
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        isDark = !isDark;
        updateThemeUI();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            selectedTag = '';

            filterButtons.forEach(b => {
                b.classList.remove(
                    'bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-md'
                );
                b.classList.add('text-slate-500');
            });

            btn.classList.add(
                'bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-md'
            );
            btn.classList.remove('text-slate-500');

            render();
        });
    });
}

/* =========================
   Header
========================= */
function updateHeader() {
    const hour = new Date().getHours();
    let greet = 'Good Evening';
    if (hour < 12) greet = 'Good Morning';
    else if (hour < 18) greet = 'Good Afternoon';

    document.getElementById('greetingText').textContent = `${greet}.`;
    document.getElementById('currentDate').textContent =
        new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
}

/* =========================
   Helpers
========================= */
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[m]);
}

// Parse text and add clickable tags
function parseText(text) {
    return escapeHTML(text).split(' ').map(w => {
        if (w.startsWith('#')) {
            const tag = w.slice(1);
            const highlight = tag === selectedTag ? 'bg-indigo-200 dark:bg-indigo-700 px-1 rounded' : '';
            return `<span onclick="filterByTag('${tag}')" class="tag cursor-pointer ${highlight}">#${tag}</span>`;
        }
        return w;
    }).join(' ');
}

/* =========================
   Render
========================= */
function render() {
    let filtered = [...tasks];

    if (searchTerm)
        filtered = filtered.filter(t =>
            t.text.toLowerCase().includes(searchTerm)
        );

    if (selectedTag)
        filtered = filtered.filter(t =>
            t.text.toLowerCase().includes(`#${selectedTag.toLowerCase()}`)
        );

    if (currentFilter === 'active')
        filtered = filtered.filter(t => !t.completed);

    if (currentFilter === 'important')
        filtered = filtered.filter(t => t.important);

    const completed = tasks.filter(t => t.completed).length;
    const active = tasks.length - completed;

    document.getElementById('activeCount').textContent = active;
    document.getElementById('totalCompleted').textContent = completed;

    const percent = tasks.length ? (completed / tasks.length) * 100 : 0;
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressPercent').textContent =
        `${Math.round(percent)}%`;

    document.getElementById('clearBtn')
        .classList.toggle('hidden', completed === 0);

    const list = document.getElementById('taskList');

    if (!filtered.length) {
        list.innerHTML = `<p class="text-center py-20 text-slate-400">No tasks found</p>`;
        return;
    }

    list.innerHTML = filtered.map(t => `
        <div class="task-item p-5 rounded-2xl border flex gap-4 items-center bg-slate-50 dark:bg-slate-900">
            <button onclick="toggleTask('${t._id}')" class="text-lg">
                ${t.completed ? '✅' : '⭕'}
            </button>

            <div class="flex-1 ${t.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''}">
                ${parseText(t.text)}
            </div>

            <button onclick="toggleImportant('${t._id}')" class="text-lg ${t.important ? 'text-amber-400' : ''}">⭐</button>
            <button onclick="removeTask('${t._id}')" class="text-lg">🗑</button>
            <button onclick="openEditModal('${t._id}')" class="text-lg">✏️</button>
        </div>
    `).join('');

    lucide.createIcons();

    renderTagCloud();
}

// Render tag cloud
function renderTagCloud() {
    const tagCloud = document.getElementById('tagCloud');
    const tags = {};

    tasks.forEach(task => {
        task.text.split(' ').forEach(word => {
            if (word.startsWith('#')) {
                const tag = word.slice(1);
                tags[tag] = (tags[tag] || 0) + 1;
            }
        });
    });

    tagCloud.innerHTML = Object.keys(tags).map(tag => `
        <span onclick="filterByTag('${tag}')" class="cursor-pointer text-sm font-bold px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white">${tag}</span>
    `).join('');
}

/* =========================
   Global Actions
========================= */
async function toggleTask(id) {
    const task = tasks.find(t => t._id === id);
    if (!task) return;
    task.completed = !task.completed;
    await updateTask(id, { completed: task.completed });
    render();
}

async function toggleImportant(id) {
    const task = tasks.find(t => t._id === id);
    if (!task) return;
    task.important = !task.important;
    await updateTask(id, { important: task.important });
    render();
}

async function removeTask(id) {
    await deleteTask(id);
    tasks = tasks.filter(t => t._id !== id);
    render();
}

function filterByTag(tag) {
    selectedTag = selectedTag === tag ? '' : tag;
    render();
}

/* =========================
   Modal Edit
========================= */
function openEditModal(taskId) {
    const task = tasks.find(t => t._id === taskId);
    if (!task) return;

    currentEditTaskId = taskId;

    document.getElementById('modalTaskId').textContent = taskId;
    document.getElementById('modalTaskName').value = task.text;
    document.getElementById('modalCompleted').checked = task.completed;

    document.getElementById('editTaskModal').classList.remove('hidden');
}

function closeModal() {
    currentEditTaskId = null;
    document.getElementById('editTaskModal').classList.add('hidden');
}

async function saveModalTask() {
    if (!currentEditTaskId) return;

    const updatedText = document.getElementById('modalTaskName').value.trim();
    const completed = document.getElementById('modalCompleted').checked;

    if (!updatedText) return alert("Task name cannot be empty!");

    await updateTask(currentEditTaskId, { text: updatedText, completed });
    const task = tasks.find(t => t._id === currentEditTaskId);
    if (task) {
        task.text = updatedText;
        task.completed = completed;
    }

    render();
    closeModal();
}

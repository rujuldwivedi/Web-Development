// Select elements from DOM
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Load existing tasks from localStorage when page loads
window.addEventListener("DOMContentLoaded", loadTasks);

// Handle form submit (Add Task)
taskForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTask(taskText);
  saveTask(taskText);
  taskInput.value = ""; // Clear input box
});

// Add task to the DOM
function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => {
    li.remove();
    removeTask(text);
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Save task to localStorage
function saveTask(text) {
  const tasks = getTasks();
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(addTask);
}

// Get task array from localStorage
function getTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

// Remove task from localStorage
function removeTask(text) {
  let tasks = getTasks();
  tasks = tasks.filter((t) => t !== text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

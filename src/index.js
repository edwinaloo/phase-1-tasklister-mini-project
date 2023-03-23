document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const input = document.getElementById("new-task-description");
  const task = input.value;

  const listItem = document.createElement("li");
  listItem.textContent = task;

  const taskList = document.getElementById("tasks");
  taskList.appendChild(listItem);

  input.value = ""; // clear the input field
});
  // your code here
});



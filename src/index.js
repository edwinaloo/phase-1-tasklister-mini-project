document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("new-task-description");
    const task = input.value;

    const listItem = document.createElement("li");
    listItem.textContent = task;

    const strikeButton = document.createElement("button");
    strikeButton.textContent = "Strike";
    strikeButton.addEventListener("click", function () {
      listItem.style.textDecoration = "line-through";
    });
    listItem.appendChild(strikeButton);

    const taskList = document.getElementById("tasks");
    taskList.appendChild(listItem);

    input.value = "";
  });
});



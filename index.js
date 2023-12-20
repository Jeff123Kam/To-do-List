const darkMode = document.querySelector(".lightUp");
const container = document.querySelector(".container");
const LightIcon = document.querySelector(".fa-solid.fa-sun.styleSun");
const TaskIcon = document.querySelector(
  ".fa-regular.fa-note-sticky.StyleTaskIcon"
);
const NoTaskWord = document.querySelector(".no-Task-Word");
const Heading = document.querySelector(".heading");
const addTask = document.getElementById("addTask");
const topSection = document.querySelector(".top-section");
let divCounter = 0;
let newTasksDivs = [];

darkMode.addEventListener("click", function () {
  container.classList.toggle("container-Dark");
  darkMode.classList.toggle("button-dark");
  Heading.classList.toggle("make-text-white");
  TaskIcon.classList.toggle("make-text-white");
  LightIcon.classList.toggle("make-text-white");
  newTasksDivs.forEach(function (div) {
    div.classList.toggle("make-div-dark");
  });
});

// create new task

addTask.addEventListener("click", function () {
  const inputField = document.getElementById("newTaskInput");
  const inputText = inputField.value.trim();

  if (inputText !== "") {
    divCounter++;
    const NewTasks = document.createElement("div");
    NewTasks.classList.add("new-div");
    if (container.classList.contains("container-Dark")) {
      // If so, add 'make-div-dark' class to the new div
      NewTasks.classList.add("make-div-dark");
    }
    // append input text
    topSection.appendChild(NewTasks);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    NewTasks.appendChild(deleteButton);

    const userTask = document.createElement("p");
    userTask.classList.add("userTask");
    userTask.textContent = inputText;
    NewTasks.appendChild(userTask);

    deleteButton.addEventListener("click", function () {
      const index = newTasksDivs.indexOf(NewTasks);
      if (index > -1) {
        newTasksDivs.splice(index, 1); // Remove the div from the array
      }
      NewTasks.remove();

      // Update the first-div class for the new first element
      if (newTasksDivs.length > 0) {
        newTasksDivs.forEach((div) => div.classList.remove("first-div"));
        newTasksDivs[0].classList.add("first-div");
      }
    });

    if (newTasksDivs.length === 0) {
      NewTasks.classList.add("first-div");
    }

    newTasksDivs.push(NewTasks);
    inputField.value = "";

    if (NoTaskWord) {
      topSection.removeChild(NoTaskWord);
    }

    if (TaskIcon) {
      topSection.removeChild(TaskIcon);
    }
  }
});

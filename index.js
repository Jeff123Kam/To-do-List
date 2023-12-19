const darkMode = document.querySelector(".lightUp");
const container = document.querySelector(".container");
const LightIcon = document.querySelector(".fa-solid.fa-sun.styleSun");
const TaskIcon = document.querySelector(
  ".fa-regular.fa-note-sticky.StyleTaskIcon"
);
const Heading = document.querySelector(".heading");

darkMode.addEventListener("click", function () {
  container.classList.toggle("container-Dark");
  darkMode.classList.toggle("button-dark");
  Heading.classList.toggle("make-text-white");
  TaskIcon.classList.toggle("make-text-white");
  LightIcon.classList.toggle("make-text-white");
});

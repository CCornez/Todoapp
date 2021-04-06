const task = document.querySelectorAll("main ul li a");
const taskToArray = Array.apply(null, task);

// function addEventListenerAll(element) {
//   element.forEach((v) => v.addEventListener("click", taskCheck()));
// }
// function taskCheck() {
//   this.className = "checked";
// }

taskToArray.forEach((v) =>
  v.addEventListener("click", function () {
    this.className = "checked";
  })
);

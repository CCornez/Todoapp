function Todo(task, checked = false) {
  this.task = task;
  this.checked = checked;
}

const taskList = [];
let doneTaskList = [];
let undoneTaskList = [];
let doneTaskString = "";
let undoneTaskString = "";

// ------------------------------------------------------

const getTaskSelector = () => {
  var taskSelector = document.querySelectorAll("main ul li a");
  return (taskToArray = Array.apply(null, taskSelector));
};
const preventDefault = (event) => event.preventDefault();

// ------------------------------------------------------

const formInputSelector = document.querySelector(".searchbar form input");
const formButtonSelector = document.querySelector(".searchbar form button");

// ------------------------------------------------------

const addEventListenerInList = () => {
  getTaskSelector();
  taskToArray.forEach((v) => {
    v.addEventListener("click", preventDefault);
    v.addEventListener("click", (e) => {
      e.target.classList.toggle("checked");
    });
    v.addEventListener("click", (e) => {
      let indexTask = taskList.map((v) => v.task).indexOf(e.target.outerText);
      taskList[indexTask].checked = !taskList[indexTask].checked;
    });
    v.addEventListener("click", filterTask);
    v.addEventListener("click", count);
  });
};

// ------------------------------------------------------

const showList = () => {
  document.querySelector(".done").innerHTML = doneTaskString;
  document.querySelector(".undone").innerHTML = undoneTaskString;
  addEventListenerInList();
};

const filterTask = () => {
  doneTaskList = taskList.filter((v) => v.checked);
  undoneTaskList = taskList.filter((v) => !v.checked);
  doneTaskString = doneTaskList
    .map(
      (v) =>
        '<li><a href="#" class="checked"><div class="checkmarkicon"><svg class="icon icon-checkmark"><use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use xlink:href=></svg></div><span>' +
        v.task +
        "</span></a></li>"
    )
    .reverse()
    .join("");
  undoneTaskString = undoneTaskList
    .map(
      (v) =>
        '<li><a href="#"><div class="checkmarkicon"><svg class="icon icon-checkmark"><use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use xlink:href=></svg></div><span>' +
        v.task +
        "</span></a></li>"
    )
    .reverse()
    .join("");
  showList();
};

// ------------------------------------------------------

const addInList = () => {
  let input = formInputSelector.value.trim();
  if (taskList.map((v) => v.task).includes(input)) {
    formInputSelector.value = "";
    console.log("task already exists");
  } else if (input.length > 0) {
    taskList.push(new Todo(input));
    formInputSelector.value = "";
    filterTask();
  } else {
    formInputSelector.value = "";
  }
};

// ------------------------------------------------------

const count = () => {
  document.querySelector("main h2").innerHTML =
    "Done (" + doneTaskList.length + ")";
  document.querySelector("main h2:last-of-type").innerHTML =
    "Remaining tasks: " + undoneTaskList.length;
};

// ------------------------------------------------------

formButtonSelector.addEventListener("click", preventDefault);
formButtonSelector.addEventListener("click", addInList);
formButtonSelector.addEventListener("click", count);

// ------------------------------------------------------

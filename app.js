function Task(task, checked = false) {
  this.task = task;
  this.checked = checked;
}

const taskList = [];
const doneTaskList = [];
const undoneTaskList = [];
let doneTaskString = "";
let undoneTaskString = "";

// ------------------------------------------------------
const getTaskSelector = () => {
  var taskSelector = document.querySelectorAll("main ul li a");
  return (taskToArray = Array.apply(null, taskSelector));
};
// ------------------------------------------------------

const formInputSelector = document.querySelector(".searchbar form input");
const formButtonSelector = document.querySelector(".searchbar form button");

const addEventListenerInList = () => {
  getTaskSelector();
  taskToArray.forEach((v) => {
    v.addEventListener("click", preventDefault);
    v.addEventListener("click", (e) => {
      e.target.classList.toggle("checked");
    });

    //make more compact/efficient
    v.addEventListener("click", (e) => {
      e.target.classList.value === "checked"
        ? (taskList.filter(
            (v) => v.task === e.target.outerText
          )[0].checked = true)
        : (taskList.filter(
            (v) => v.task === e.target.outerText
          )[0].checked = false);
      console.log(taskList);
    });
    v.addEventListener("click", filterTask);
  });
};

const showList = () => {
  document.querySelector(".done").innerHTML = doneTaskString;
  document.querySelector(".undone").innerHTML = undoneTaskString;
  addEventListenerInList();
};

const filterTask = () => {
  doneTaskString = taskList
    .filter((v) => v.checked)
    .map(
      (v) =>
        '<li><a href="#" class="checked"><div class="checkmarkicon"><svg class="icon icon-checkmark"><use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use xlink:href=></svg></div><span>' +
        v.task +
        "</span></a></li>"
    )
    .reverse()
    .join("");
  undoneTaskString = taskList
    .filter((v) => !v.checked)
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

const addInList = () => {
  let v = formInputSelector.value.trim();
  if (v.length > 0) {
    taskList.push(new Task(v));
    formInputSelector.value = "";
    filterTask();
  } else {
    formInputSelector.value = "";
  }
};

const preventDefault = (event) => event.preventDefault();

formButtonSelector.addEventListener("click", preventDefault);
formButtonSelector.addEventListener("click", addInList);

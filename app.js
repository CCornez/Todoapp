const taskList = [];
let taskString = "";
const formInputSelector = document.querySelector(".searchbar form input");
const formButtonSelector = document.querySelector(".searchbar form button");
const getTaskSelector = () => {
  var taskSelector = document.querySelectorAll("main ul li a");
  return (taskToArray = Array.apply(null, taskSelector));
};

const preventDefault = (event) => event.preventDefault();

const addEventListenerInList = () => {
  getTaskSelector();
  taskToArray.forEach((v) => v.addEventListener("click", preventDefault));
  taskToArray.forEach((v) =>
    v.addEventListener("click", (e) => {
      e.target.classList.toggle("checked");
    })
  );
};

const showList = () => {
  taskListHTML = taskList.reverse().join("");
  document.querySelector("main ul").innerHTML = taskString;
  addEventListenerInList();
};

const addInList = () => {
  let v = formInputSelector.value.trim();
  if (v.length > 0) {
    taskList.push(v);
    taskString +=
      '<li><a href="#"><div class="checkmarkicon"><svg class="icon icon-checkmark"><use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use xlink:href=></svg></div><span>' +
      v +
      "</span></a></li>";
    formInputSelector.value = "";
    showList();
  } else {
    formInputSelector.value = "";
  }
};

formButtonSelector.addEventListener("click", preventDefault);
formButtonSelector.addEventListener("click", addInList);

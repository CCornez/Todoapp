const task = document.querySelectorAll("main ul li a");
const taskToArray = Array.apply(null, task);

//NEED TO COMPACT THIS .TOGGLE

const preventDefault = (event) => event.preventDefault();
// const checkUncheck = () =>
//   this.className === "checked"
//     ? (this.className = "")
//     : (this.className = "checked");

taskToArray.forEach((v) => v.addEventListener("click", preventDefault));
// taskToArray.forEach((v) => v.addEventListener("click", checkUncheck));

taskToArray.forEach((v) =>
  v.addEventListener("click", function () {
    if (this.className === "checked") {
      this.className = "";
    } else {
      this.className = "checked";
    }
  })
);

//---------------------------------------------------------------

const taskList = [];
let taskListHTML = "";
const formInputSelector = document.querySelector(".searchbar form input");
const formButtonSelector = document.querySelector(".searchbar form button");

const showList = () => {
  taskListHTML = taskList
    .map(
      (v) =>
        '<li><a href="#"><div class="checkmarkicon"><svg class="icon icon-checkmark"><use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use xlink:href=></svg></div><span>' +
        v +
        "</span></a></li>"
    )
    .reverse()
    .join("");
  document.querySelector("main ul").innerHTML = taskListHTML;
};

const addInList = () => {
  let v = formInputSelector.value.trim();
  if (v.length > 0) {
    taskList.push(v);
    formInputSelector.value = "";
    showList();
  } else {
    formInputSelector.value = "";
  }
};

formButtonSelector.addEventListener("click", preventDefault);
formButtonSelector.addEventListener("click", addInList);

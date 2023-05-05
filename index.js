let getTask = () => {
  let task = document.querySelector(".tasks-box_field-input").value; //задаем переменную для задачи и путь к ней
  return `<label for="checkbox" class="list_task">${task}<input id="checkbox" type="checkbox" class="list_checkbox"></label>`; // возвращаем разметку с задачей
};

let totalStringVDom = " ";

let addTask = document.querySelector(".tasks-box_field-button"); // задаем переменную для кнопки добавления задач и путь к ней
let emptyList = document.querySelector(".list-box_field-button"); // задаем переменную для кнопки очистки списка задач и путь к ней

addTask.addEventListener("click", () => {
  // функция, которая срабатывает при нажатии на кнопку Добавить задачу
  let task = document.querySelector(".tasks-box_field-input").value;
  if (task.length > 0) {
    //условие, проверяющее, что введена задача, те количество букв больше 0
    let newTask = getTask(); // задача выводится по нажатию на кнопку Добавить
    totalStringVDom =
      totalStringVDom + `<div class="field-tasks_list">${newTask}</div>`;
    document.querySelector(".list-box_field-tasks").innerHTML = totalStringVDom; // выводим задачи
    document.querySelector(".tasks-box_field-input").value = "";
    emptyList.removeAttribute("disabled");
  }
});

emptyList.addEventListener("click", () => {
  // функция, которая срабатывает при нажатии на кнопку  Очистить список задач
  document.querySelector(".list-box_field-tasks").innerHTML = "Нет задач";
  emptyList.setAttribute("disabled", " ");
  totalStringVDom = " ";
});

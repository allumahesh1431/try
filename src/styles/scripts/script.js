let todoElement = document.createElement("li");
// alert("hi")
todoElement.classList.add("todo-item-container","d-flex","flex-direction");
let todoItems=document.getElementById("todo-items-container")
todoItems.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.classList.add("checkbox-input");
inputElement.type = "checkbox";
inputElement.id = "checkboxInput";
todoElement.appendChild(inputElement);

let labelContainerElement = document.createElement("div");
inputElement.classList.add("label-container");
todoElement.appendChild(labelContainerElement);

let checkboxElement = document.createElement("label");
checkboxElement.classList.add("checkbox-label");
checkboxElement.setAttribute("for", "checkboxInput");
checkboxElement.textConennt="Learn Html";
labelContainerElement.appendChild(checkboxElement);
alert("hi   ")
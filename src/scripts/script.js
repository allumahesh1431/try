const todoinput = document.getElementById("todoinput");
const addbutton = document.getElementById("addbutton");
const todoList = document.getElementById("todoList");

loadTask();

function addtask(){
    const task=todoinput.value.trim();
    if(task){
        createTask(task);
        
        todoinput.value = '';
        saveTask();
    }else{
        alert("Please Type Something")
    }
}
function createTask(task){
    const liItem = document.createElement("li");
    liItem.textContent=task;
    todoList.appendChild(liItem);
}

function saveTask(){
    let tasks = [];
    todoList.querySelectorAll("li").forEach(function(item){
      tasks.push(item.textContent.trim())
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTask);
}

addbutton.addEventListener("click",addtask)
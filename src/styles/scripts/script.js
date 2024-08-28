let todoItems=document.getElementById("todo-items-container")
let inputkeyElement = document.getElementById("inputkey")
let saveButtonElement = document.getElementById("saveTodoButton")

function getItemLocalTodos(){
    let stringfiedList = localStorage.getItem("todoList")
    let parseTodoList = JSON.parse(stringfiedList)
    if (parseTodoList == null){
        return[];
    }else{
        return parseTodoList;
    }
} 


let todoList = [
    { text: "Learn HTML", uniqueNo :1 },
    { text: "Learn CSS", uniqueNo :2 },
    { text: "Learn JavaScript", uniqueNo :3},
    { text: "Learn Bootstrap",uniqueNo :4 }
];

saveButtonElement.onclick = function(){
   localStorage.setItem("todolist",JSON.stringify(todoList));
};


inputkeyElement.onclick = function(){
    Addinput()
}


function OnTodoStatusChange(checkboxId, labelId){
    let checkboxElement = document.getElementById(checkboxId);

    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("checked");

    /*if(checkboxElement.checked === true){
     labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }*/
}
function  OnTodoDelete(todoId){
    let todoElement = document.getElementById(todoId);
    todoItems.removeChild(todoElement);

    let deleteIndex= todoList.findIndex(function(eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if(eachTodo === todoId){
                return true;
        }else{
            return false;
        }

    });
    todoList.splice(deleteIndex, 1);
}

function createAndAppend(todo){
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label"+ todo.uniqueNo;
    let todoId = "todo"+ todo.uniqueNo;


    let todoElement = document.createElement("li");

    todoElement.classList.add("todo-item-container","d-flex","flex-direction");
    todoElement.id = todoId;
    
    todoItems.appendChild(todoElement);
    
    
    
    let inputElement = document.createElement("input");
    inputElement.classList.add("checkbox-input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function(){
     OnTodoStatusChange(checkboxId, labelId)
    }
    
    todoElement.appendChild(inputElement);
    
    
    
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container" , "d-flex" ,"flex-row");
    
    
    todoElement.appendChild(labelContainer);
    
    
    
    let labelElement = document.createElement("label");

    labelElement.id = labelId;
    
    labelElement.setAttribute("for", checkboxId);
    
    labelElement.classList.add("checkbox-label");
    
    labelElement.textContent = todo.text;
    
    labelContainer.appendChild(labelElement);
    
    
    
    let deleteiconItem = document.createElement("div");
    
    deleteiconItem.classList.add("delete-icon-item");
    
    labelContainer.appendChild(deleteiconItem);
    
    
    
    let deleteIcon = document.createElement("i");
    
    deleteIcon.classList.add("fa", "fa-trash", "delete-icon"); 
    
    deleteIcon.onclick=function(){
        OnTodoDelete(todoId)
    }
    
    deleteiconItem.appendChild(deleteIcon);
    
}




function Addinput(){
    let todosCount = todoList.length;
    todosCount =todosCount + 1;
  
  
    let userInputElement = document.getElementById("userInput");
    let userInputValue = userInputElement.value; 
  
    let newTodo = {
      text : userInputValue,
      uniqueNo : todosCount
    };
    todoList.push(newTodo);


     createAndAppend(newTodo);
     userInputElement.value = " ";
  
  }


for(let eachtodo of todoList){
    createAndAppend(eachtodo);
}






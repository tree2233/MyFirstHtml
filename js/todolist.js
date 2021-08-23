const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "ToDoList";
let toDo = [];

function SaveToDoList() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
}

function DeleteToDoList(event) {
    const li = event.target.parentElement;
    li.remove();
    toDo = toDo.filter((Do) => Do.id !== parseInt(li.id));
    SaveToDoList(); 

}

function PaintToDoList(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDoObj.text;
    button.innerText = "X";

    button.addEventListener("click", DeleteToDoList);

    toDoList.appendChild(li);
}

function handleToDoForm(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }

    toDo.push(newToDoObj);
    SaveToDoList();

    toDoInput.value = "";
    
    PaintToDoList(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoForm);

const SavedToDo = localStorage.getItem(TODO_KEY);

if(SavedToDo !== null) {
    toDo = JSON.parse(SavedToDo);
    toDo.forEach(PaintToDoList);
}

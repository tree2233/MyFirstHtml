const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "ToDoList";
const HIDDEN_KEY = "hidden";
const ISCHECK_KEY = "ischeck";
const INPUT_CLASS = "input";
const INLINE_CLASS = "inline_block";
const TEXT_CLASS = "text";

let toDo = [];

function SaveToDoList() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
}

function HandleClickText(event) {
    const li = event.target.parentElement;
    const form = li.children[2];
    li.children[1].classList.add(HIDDEN_KEY);
    form.firstChild.classList.remove(HIDDEN_KEY);
}

function ModifyList(event) {
    const li = event.target.parentElement;
    const form = event.target;
    li.children[1].classList.remove(HIDDEN_KEY);
    form.firstChild.classList.add(HIDDEN_KEY);
    toDo.forEach((Do) => {
        if(Do.id === parseInt(li.id)) {
            toDo[toDo.indexOf(Do)].text = form.firstChild.value;
            SaveToDoList();
        }
    })
}

function HandleCheckbox(event) {
    const li = event.target.parentElement;
    if(event.target.checked === true) {
        li.children[1].classList.add(ISCHECK_KEY);
    }
    else {
        li.children[1].classList.remove(ISCHECK_KEY);
    }
    toDo.forEach((Do) => {
        if(Do.id === parseInt(li.id)) {
            toDo[toDo.indexOf(Do)].ischeck = event.target.checked;
            SaveToDoList();
        }
    })
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
    const checkbox_input = document.createElement("input");
    const modify_form = document.createElement("form");
    const modify_input = document.createElement("input");

    li.appendChild(checkbox_input);
    li.appendChild(span);
    li.appendChild(modify_form);
    li.appendChild(button);

    modify_form.appendChild(modify_input);

    span.classList.add(TEXT_CLASS);
    span.innerText = newToDoObj.text;
    button.innerText = "X";
    checkbox_input.type = "checkbox";
    checkbox_input.checked = newToDoObj.ischeck;
    newToDoObj.ischeck &&= span.classList.add(ISCHECK_KEY);

    modify_input.classList.add(INPUT_CLASS);
    modify_input.required = true;
    modify_input.value = newToDoObj.text;
    modify_input.classList.add(HIDDEN_KEY);
    modify_form.classList.add(INLINE_CLASS);
    
    span.addEventListener("mouseover", (event) => {event.target.style = "color:gray"});
    span.addEventListener("mouseout", (event) => {event.target.style = "color:black"});
    button.addEventListener("click", DeleteToDoList);
    checkbox_input.addEventListener("click", HandleCheckbox);

    span.addEventListener("click", HandleClickText);
    modify_form.addEventListener("submit", ModifyList);

    toDoList.appendChild(li);
}

function handleToDoForm(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        ischeck: false
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
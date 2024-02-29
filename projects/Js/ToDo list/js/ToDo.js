//fix when checked moves to done

import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid@5.0.6/+esm';
const userInput = document.getElementById("userInput");
const btn = document.getElementById("button");
const list = document.getElementById("list");
const clearBtn = document.getElementById('clear-button');
const ToDos = [];
const savedList = JSON.parse(localStorage.getItem('ToDo list'));
// update and render existing list on refresh
if (savedList) {
    ToDos.push(...savedList);
    let index = -1
    ToDos.forEach(item => {
        index++
        render(ToDos, index);
    });
}

function addToList() {
    let todo = userInput.value;
    userInput.value = "";
    const item = {
        id: nanoid(),
        description: todo,
        isDone: false
    }
    ToDos.push(item);
    console.log(ToDos);
    localStorage.setItem('ToDo list', JSON.stringify(ToDos));
    //render only the last todo from the list
    render(ToDos, (ToDos.length - 1));
}
//render one item from array.
function render(array, itemIndex) {
    const item = array[itemIndex]
    const newTask = document.createElement('li');
    newTask.textContent = item.description;
    newTask.id = item.id;
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'me-2 checkbox');
    checkbox.setAttribute('data-todo-id', item.id);
    checkbox.checked = item.isDone;
    const removeTask = document.createElement('button');
    removeTask.setAttribute('class', 'btn btn-warning');
    removeTask.setAttribute('data-todo-id', item.id);
    removeTask.textContent = 'Remove';
    newTask.id = item.id;
    newTask.setAttribute('class', 'todo-list-item')
    newTask.textContent = item.description;
    list.appendChild(newTask);
    newTask.prepend(checkbox);
    newTask.appendChild(removeTask);

}

btn.addEventListener('click', addToList)

function removeToDo(e) {
    if (e.target && e.target.matches('.btn-warning')) {
        const id = e.target.getAttribute('data-todo-id');
        const index = ToDos.findIndex(todo => todo.id === id);
        ToDos.splice(index, 1);

        const todo = document.getElementById(id);
        list.removeChild(todo);
        localStorage.setItem('ToDo list', JSON.stringify(ToDos));
    }
}
list.addEventListener('click', removeToDo)

function toggleTodoDone(e) {
    if (e.target && e.target.matches('.checkbox')) {
        const todoId = e.target.getAttribute('data-todo-id');
        const todo = ToDos.find(todo => todo.id === todoId);
        if (todo) {
            todo.isDone = e.target.checked;
            // Update localStorage with the new state
            localStorage.setItem('ToDo list', JSON.stringify(ToDos));
            window.location.reload();

        }
    }
}
list.addEventListener('click', toggleTodoDone);


console.log(savedList);
console.log(ToDos)

//Delete and Refresh list
clearBtn.addEventListener('click', () => {
    localStorage.clear('ToDo list')
    window.location.reload();
});

ToDos.forEach(e => {
    if (e.isDone == true) {
        const id = e.id
        const todo = document.getElementById(id)
        todo.setAttribute('class', 'todo-list-item completed')
    }
});
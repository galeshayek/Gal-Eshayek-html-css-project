
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid@5.0.6/+esm';
const userInput = document.getElementById("userInput");
const btn = document.getElementById("button");
const listTodo = document.getElementById("list-todo");
const listIsDone = document.getElementById("list-isDone")
const clearBtn = document.getElementById('clear-button');
const ToDos = [];
const savedList = JSON.parse(localStorage.getItem('ToDo list'));
// update and render existing list on refresh
if (savedList) {
    ToDos.push(...savedList);
    let index = 0
    ToDos.forEach(item => {
        render(ToDos, index);
        index++
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
    newTask.id = item.id;
    newTask.setAttribute('class', 'todo-list-item')
    newTask.textContent = item.description;
    if (item.isDone === true) {
        newTask.setAttribute('class', ' todo-list-item completed')
        listIsDone.appendChild(newTask);
        newTask.prepend(checkbox);
        const removeTask = document.createElement('button');
        removeTask.setAttribute('class', 'btn btn-warning');
        removeTask.setAttribute('data-button-id', item.id);
        removeTask.textContent = 'Remove';
        newTask.appendChild(removeTask);
        return
    }
    listTodo.appendChild(newTask);
    newTask.prepend(checkbox);

}


btn.addEventListener('click', addToList)


function toggleTodoDone(e) {
    if (e.target && e.target.matches('.checkbox')) {
        //gets the checkbox id
        const todoId = e.target.getAttribute('data-todo-id');
        //finds the todo that matches the checkbox id
        const todo = ToDos.find(todo => todo.id === todoId);
        //changes todo isDone to false or true
        todo.isDone = e.target.checked;
        //update todo class
        // Update localStorage with the new state
        localStorage.setItem('ToDo list', JSON.stringify(ToDos));
        //reloads the page to update style
        // window.location.reload();
        ToDos.forEach(item => {
            if (item.isDone == true) {
                // Apply styles and class for completed todo items
                const id = item.id
                const todo = document.getElementById(id)
                todo.style.textDecoration = 'line-through';
                todo.style.color = '#6c757d';
                todo.setAttribute('class', 'todo-list-item completed');
                // Move the completed todo item to the designated completed list
                listTodo.removeChild(todo);
                listIsDone.appendChild(todo);
                const removeTask = document.createElement('button');
                removeTask.setAttribute('class', 'btn btn-warning');
                removeTask.setAttribute('data-button-id', item.id);
                removeTask.textContent = 'Remove';
                todo.appendChild(removeTask);
            } else {
                const id = item.id
                const todo = document.getElementById(id)
                todo.style.textDecoration = 'none';
                todo.style.color = 'black';
                todo.setAttribute('class', 'todo-list-item');
                listIsDone.removeChild(todo);
                listTodo.appendChild(todo);
                const removeTask = document.querySelector(`[data-button-id="${id}"]`);
                todo.removeChild(removeTask);
            }
        });
    }
}
listTodo.addEventListener('click', toggleTodoDone);
listIsDone.addEventListener('click', toggleTodoDone);

function removeToDo(e) {
    if (e.target && e.target.matches('.btn-warning')) {
        const id = e.target.getAttribute('data-button-id');
        const index = ToDos.findIndex(todo => todo.id === id);
        ToDos.splice(index, 1);

        const todo = document.getElementById(id);
        console.log(todo);
        listIsDone.removeChild(todo);
        localStorage.setItem('ToDo list', JSON.stringify(ToDos));
    }
}
listIsDone.addEventListener('click', removeToDo);



console.log(ToDos)

//Delete and Refresh list
clearBtn.addEventListener('click', () => {
    localStorage.clear('ToDo list')
    window.location.reload();
});



import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid@5.0.6/+esm';
const userInput = document.getElementById("userInput");
const searchButton = document.getElementById("search");
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
//style and move item from lists when cheking the checkbox
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
        //apply style
        if (todo.isDone == true) {
            const id = todo.id
            const todoDom = document.getElementById(id)
            // Apply styles and class for completed todo items
            todoDom.style.textDecoration = 'line-through';
            todoDom.style.color = '#6c757d';
            todoDom.setAttribute('class', 'todo-list-item completed');
            // Move the completed todo item to the designated completed list
            listTodo.removeChild(todoDom);
            listIsDone.appendChild(todoDom);
            const removeTask = document.createElement('button');
            removeTask.setAttribute('class', 'btn btn-warning');
            removeTask.setAttribute('data-button-id', id);
            removeTask.textContent = 'Remove';
            todoDom.appendChild(removeTask);
        } else {
            const id = todo.id
            const todoDom = document.getElementById(id)
            todoDom.style.textDecoration = 'none';
            todoDom.style.color = 'black';
            todoDom.setAttribute('class', 'todo-list-item');
            listIsDone.removeChild(todoDom);
            listTodo.appendChild(todoDom);
            const removeTask = document.querySelector(`[data-button-id="${id}"]`);
            todoDom.removeChild(removeTask);
        }
    }
}

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
//eventListeners
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
})
searchButton.addEventListener('click', addToList);
listTodo.addEventListener('click', toggleTodoDone);
listIsDone.addEventListener('click', toggleTodoDone);
listIsDone.addEventListener('click', removeToDo);
//Delete and Refresh list
clearBtn.addEventListener('click', () => {
    localStorage.clear('ToDo list')
    window.location.reload();
});

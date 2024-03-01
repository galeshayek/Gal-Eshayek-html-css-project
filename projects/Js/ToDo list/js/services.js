const userInput = document.getElementById("userInput");
const searchButton = document.getElementById("search");
const listTodo = document.getElementById("list-todo");
const listIsDone = document.getElementById("list-isDone")
const clearBtn = document.getElementById('clear-button');
const ToDos = [];
const savedList = JSON.parse(localStorage.getItem('ToDo list'));

const triggerButton = userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
})
export { triggerButton }
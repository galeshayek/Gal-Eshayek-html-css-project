const userInput = document.getElementById("userInput");
const btn = document.getElementById("button")
const list = document.getElementById("list")
const ToDos = []
let id = ToDos.length + 1
const savedList = JSON.parse(localStorage.getItem('ToDo list'))
if (savedList) {
    localStorage.setItem('ToDo list', JSON.stringify(savedList))
    savedList.forEach(item => {
        item.id = id++
        ToDos.push(item)
        const newTask = document.createElement('li');
        newTask.textContent = item.description;
        newTask.id = `toDo${item.id}`;
        list.appendChild(newTask);
    });
}
function addToList() {
    let todo = userInput.value
    userInput.value = ""
    const item = {
        id: id++,
        description: todo,
        isDone: false
    }
    ToDos.push(item);
    console.log(ToDos)
    const newTask = document.createElement('li');
    newTask.id = `toDo${item.id}`;
    newTask.textContent = item.description;
    list.appendChild(newTask);
    localStorage.setItem('ToDo list', JSON.stringify(ToDos));
}

btn.addEventListener('click', addToList)

function removeToDo(x) {
    const idToRemove = x
    const updateList = savedList.filter(todo => todo.id !== idToRemove)
    localStorage.setItem('ToDo list', JSON.stringify(updateList))
    child = document.getElementById(`toDo${x}`);
    list.removeChild(child)

}
console.log(savedList);
// localStorage.clear()


const form = document.querySelector('#add-task-form');
const taskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

let tasks = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(taskInput.value);
});

function addTask(task) {
  if (task !== '') {
    const newTask = {
      id: Date.now(),
      task: task,
      complete: false
    };

    tasks.push(newTask);
    taskInput.value = '';

    displayTasks();
  }
}

function displayTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.complete;
    checkbox.addEventListener('click', toggleComplete);
    li.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = task.task;
    li.appendChild(span);

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'delete task?-----';
    deleteBtn.addEventListener('click', deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function toggleComplete(e) {
  const id = parseInt(e.target.parentElement.getAttribute('data-id'));

  tasks = tasks.map(task => {
    if (task.id === id) {
      task.complete = !task.complete;
    }
    return task;
  });

  displayTasks();
}

function deleteTask(e) {
  const id = parseInt(e.target.parentElement.getAttribute('data-id'));

  tasks = tasks.filter(task => task.id !== id);

  displayTasks();
}

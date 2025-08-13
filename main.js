const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todo-input");
const taskList = document.querySelector("#task-list");

const tasks = JSON.parse(localStorage.getItem('tasks'))??[];

todoForm.onsubmit = (e) => {
  e.preventDefault();

  const newTask = {
    name: todoInput.value.trim(),
  };

  if(!newTask.name){
    alert("khong duoc de trong");
    return;
  }


  const exitTask = tasks.find((task) => task.name.toLowerCase() === newTask.name.toLowerCase());
  if(exitTask){
    alert(`${exitTask.name} da ton tai`)
    return ;
  }

  tasks.unshift(newTask);

  localStorage.setItem("tasks",JSON.stringify(tasks))

  renderTasks();

  todoInput.value=""
};

function renderTasks() {
    if(!tasks.length){
        taskList.innerHTML = `<li>Danh sach trong</li>`
        return;
    }
  const html = tasks.map((task) => {
    return `
        <li class="task-item">
            <span class="task-title">${task.name}</span>
            <div class="task-action">
                <button class="task-btn edit">Edit</button>
                <button class="task-btn done">Mark as done</button>
                <button class="task-btn delete">Delete</button>
            </div>
        </li>
        `
  }).join("");


  taskList.innerHTML = html;
}

renderTasks();

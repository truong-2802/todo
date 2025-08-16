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
    // c2
    taskList.innerHTML = ""

    tasks.forEach((task)=>{
      const li = document.createElement("li");
      li.className = "task-item"
      taskList.appendChild(li)

      const span = document.createElement("span");
      span.className = "task-title"
      span.textContent = task.name;
      li.appendChild(span)

      const div = document.createElement("div");
      div.className = "task-action"
      li.appendChild(div)

      const button = document.createElement("button")
      button.className = "task-btn edit"
      button.innerText = "Edit"
      div.appendChild(button)

      const button1 = document.createElement("button")
      button1.className = "task-btn done"
      button1.innerText= "Mark as done"
      div.appendChild(button1)

      const button2 = document.createElement("button")
      button2.className = "task-btn delete"
      button2.innerText= "Delete"
      div.appendChild(button2)

    })

    // c1
  // const html = tasks.map((task) => {
  //   return `
  //       <li class="task-item">
  //           <span class="task-title">${escapeHTML(task.name)}</span>
  //           <div class="task-action">
  //               <button class="task-btn edit">Edit</button>
  //               <button class="task-btn done">Mark as done</button>
  //               <button class="task-btn delete">Delete</button>
  //           </div>
  //       </li>
  //       `
  // }).join("");


  // taskList.innerHTML = html;
}

// c1
// function escapeHTML(str){
//   const escape = document.querySelector("#escape")
//   escape.innerText = str;
//   const result = escape.innerHTML;

//   escape.innerHTML = "";

//   return result;

// }


renderTasks();

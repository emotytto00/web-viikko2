// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function renderTodoList() {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  todoList.forEach((item) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });
    const label = document.createElement('label');
    label.textContent = item.task;
    li.appendChild(checkbox);
    li.appendChild(label);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      todoList = todoList.filter((todo) => todo.id !== item.id);
      li.parentNode.removeChild(li);
      console.log(todoList);
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

document.querySelector('.add-btn').addEventListener('click', () => {
  const dialog = document.querySelector('dialog');
  dialog.showModal();
});

document.querySelector('dialog form').addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('dialog input').value;
  if (inputValue.trim() !== '') {
    const newItem = {
      id: todoList.length + 1,
      task: inputValue,
      completed: false,
    };
    todoList.push(newItem);
    console.log(todoList);
    renderTodoList();
    document.querySelector('dialog').close();
    document.querySelector('dialog input').value = '';
  }
});

renderTodoList();

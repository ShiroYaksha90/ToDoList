const addToLocalStorage = (task, completed, index) => {
  const tasks = { task, completed, index };

  const tasksList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  tasksList.push(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasksList));
};

const removeFromLocalStorage = (index) => {
  let tasksList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  tasksList = tasksList.filter((task) => {
    if (task.index !== index) {
      return true;
    }
    return false;
  });

  localStorage.setItem('tasks', JSON.stringify(tasksList));
};

const editLocalStorage = (editedtask, status, index) => {
  let tasksList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  tasksList = tasksList.map((item) => {
    if (item.index === index) {
      item.task = editedtask;
      item.completed = status;
    }
    return item;
  });
  localStorage.setItem('tasks', JSON.stringify(tasksList));
};

export {
  addToLocalStorage, removeFromLocalStorage, editLocalStorage,
};
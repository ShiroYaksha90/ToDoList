const addToLocalStorage = (task, status, index) => {
  const tasks = { task, status, index };

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
  window.location.reload();
};

const editLocalStorage = (editedtask, status, index) => {
  let tasksList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  tasksList = tasksList.map((item) => {
    if (item.index === index) {
      item.task = editedtask;
      item.status = status;
    }
    return item;
  });
  localStorage.setItem('tasks', JSON.stringify(tasksList));
};

export {
  addToLocalStorage, removeFromLocalStorage, editLocalStorage,
};
import './style.css';
import { addToLocalStorage, removeFromLocalStorage, editLocalStorage } from './modules/storage.js';
import resetIndex from './modules/update.js';

const listContainer = document.querySelector('.list-container');
const myForm = document.querySelector('.form');
const input = document.querySelector('.to-do');
const itemesList = document.querySelector('.itemesList');
const clearbtn = document.querySelector('.clearbtn');

// Add function
const addTask = (e) => {
  e.preventDefault();
  const tasksList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  const item = input.value;
  const status = false;
  const index = (tasksList.length + 1).toString();
  if (item) {
    const article = document.createElement('article');
    article.className = 'article';
    const attribute = document.createAttribute('data-index');
    attribute.value = index;
    article.setAttributeNode(attribute);
    article.innerHTML = `<div class="item">
    <input type="checkbox"><div class="list"><p class="list-item">${item}</p></div>
    </div>
    <div class="icons">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <i class="fa-solid fa-trash-clock fa-trash"></i>
    </div>`;
    const opBtn = article.querySelector('.fa-ellipsis-vertical');
    const removeBtn = article.querySelector('.fa-trash');
    opBtn.addEventListener('click', (e) => {
      opBtn.classList.add('hide');
      removeBtn.classList.add('show');
      const editList = e.target.parentElement.previousElementSibling.lastElementChild.childNodes[0];
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.className = 'edit-input';
      article.classList.add('edit-article');
      const p = document.querySelector('.list-item');
      editInput.value = editList.textContent;
      const editIndex = article.dataset.index;
      editInput.focus();
      const descDiv = e.target.parentElement.previousElementSibling.lastElementChild;
      editList.style.display = 'none';
      descDiv.appendChild(editInput);

      editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          editList.textContent = editInput.value;
          descDiv.appendChild(editList);
          descDiv.removeChild(editInput);
          p.style.display = 'block';
          article.classList.remove('edit-article');
          opBtn.classList.remove('hide');
          removeBtn.classList.remove('show');
          editLocalStorage(editList.textContent, status, editIndex);
        }
        // editLocalStorage(value, status, editIndex);
      });
    });
    removeBtn.addEventListener('click', (e) => {
      const task = e.target.parentElement.parentElement;
      const { index } = task.dataset;
      itemesList.removeChild(task);
      if (itemesList.children.length === 0) {
        listContainer.classList.remove('display-container');
      }
      removeFromLocalStorage(index);
      resetIndex();
      // console.log(localStorage.tasks)
    });

    itemesList.appendChild(article);
    listContainer.classList.add('display-container');
    input.value = '';
    const itemObject = {};
    itemObject.desc = item;
    itemObject.status = false;
    itemObject.index = index;
    addToLocalStorage(item, status, index);
  }
// console.log(localStorage.tasks)
};
// Clear all tasks

myForm.addEventListener('submit', addTask);
clearbtn.addEventListener('click', () => {
  const tasks = document.querySelector('.itemesList');
  while (tasks.firstChild) {
    tasks.removeChild(tasks.firstChild);
  }
  listContainer.classList.remove('display-container');
  localStorage.removeItem('tasks');
});

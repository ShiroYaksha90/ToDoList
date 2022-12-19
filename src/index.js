import './style.css';

const data = [
  {
    desc: 'Go shopping',
    completed: false,
    index: 1,
  },
  {
    desc: 'Take out the trash',
    completed: false,
    index: 2,
  },
  {
    desc: "Finish today's tasks",
    completed: false,
    index: 3,
  },
];
const listContainer = document.querySelector('.itemesList');

window.addEventListener('DOMContentLoaded', () => {
  const listString = data.map((list) => `<article>
          <div class="item">
              <input type="checkbox">
              <p>${list.desc}</p>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
      </article>`)
    .join('');
    //   console.log(listString)
  listContainer.innerHTML = listString;
});
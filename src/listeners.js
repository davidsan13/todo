import { rightContainer } from './dom';
import { formHidden } from './form';
import { postData, getKey, getValue, getProjectValue, removeTask } from './localStorage';
import { createTask} from './task';
import today from './today';

// move to dom.js
function renderRtContainer(key, value) {
  const rtContent = document.querySelector('.rtContent');
  rtContent.textContent = ' ';
  rightContainer(key, value);
  // eslint-disable-next-line no-use-before-define
  deleteListener();
}

function listeners() {
  const addBtn = document.getElementById('addForm');
  const cancelBtn = document.getElementById('cancel');
  projectListener(); //Need to add to index.js and delete after
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = createTask();
    postData(task);
    formHidden();
    const key = task.project;
    const values = getProjectValue(key).tasksList;
    renderRtContainer(key, values);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 10);
  });

  todayListener();
  cancelBtn.addEventListener('click', () => formHidden());
}

function deleteListener() {
  const btns = document.querySelectorAll('.icon');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.closest('div[class=taskItem]');
      const {index} = target.dataset;
      const key = target.dataset.project;
      const value = removeTask(key, index).tasksList;
      renderRtContainer(key, value);
    });
  });
}

function projectListener() {
  const btns = document.querySelectorAll('.project');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { key } = btn.dataset;
      const value = getProjectValue(key).tasksList;
      renderRtContainer(key, value);
    });
  });
}

function todayListener() {
  const btn = document.querySelector('.today');
  btn.addEventListener('click', () => {
    const rtContent = document.querySelector('.rtContent');
    rtContent.textContent = ' ';
    today();
    deleteListener();
  });
}


export { listeners, deleteListener, renderRtContainer };

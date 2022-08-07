import { ClearRtContainer, rightContainer } from './dom';
import { formHidden, formActive } from './form';
import { postData, getKey, getValue, getProjectValue, removeTask, valueGetter } from './localStorage';
import { CreateTask } from './task';
import Today from './today';
import priority from './priority';
import Inbox from './inbox';

// move to dom.js

function listeners() {
  const addBtn = document.getElementById('addForm');
  const cancelBtn = document.getElementById('cancel');
  // projectListener(); // Need to add to index.js and delete after
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = CreateTask();
    postData(task);
    formHidden();
    const key = task.project;
    const values = valueGetter(key).tasksList;
    const project = {};
    project[key] = values;
    ClearRtContainer();
    rightContainer(project);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 10);
  });
  cancelBtn.addEventListener('click', () => formHidden());
}

function deleteListener() {
  const btns = document.querySelectorAll('.icon');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.closest('div[class=taskItem]');
      const { index } = target.dataset;
      const key = target.dataset.project;
      const removeValue = removeTask(key, index).tasksList;
      const parentClassName = target.parentNode.className;
      ClearRtContainer();
      if (parentClassName.includes('priority')) {
        priority();
      } else if (parentClassName.includes('today')) {
        Today();
      } else if (parentClassName.includes('inbox')) {
        Inbox();
      } else {
        const project = {};
        const value = getProjectValue(key).tasksList;
        project[key] = value;
        ClearRtContainer();
        rightContainer(project);
      }
    });
  });
}

function projectListener() {
  const btns = document.querySelectorAll('.project');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const project = {};
      const { key } = btn.dataset;
      const value = getProjectValue(key).tasksList;
      project[key] = value;
      ClearRtContainer();
      rightContainer(project);
    });
  });
}

const formActiveListener = () => {
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', () => {
    formActive();
  });
};

function urgentListener() {
  const btns = document.querySelectorAll('.urgent');
  const rtContent = document.querySelector('.rtContent');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const active = document.querySelector('.active');
      if (active != null) {
        active.classList.remove('active');
      }
      const btnData = btn.dataset.key;
      btn.classList.add('active');
      if (btnData === 'priority') {
        rtContent.classList.remove('today', 'inbox');
        priority();
      } else if (btnData === 'today') {
        rtContent.classList.remove('priority', 'inbox');
        Today();
      } else {
        rtContent.classList.remove('priority', 'priority');
        Inbox();
      }
    });
  });
}

function list() {
  deleteListener();
  formActiveListener();
}

function allListeners() {
  urgentListener();
  projectListener();
  // formActiveListener();
  listeners();
  // deleteListener();
}
export { listeners, deleteListener, formActiveListener, allListeners, list };

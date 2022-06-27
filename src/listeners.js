import { rightContainer } from './dom';
import { formHidden } from './form';
import { postData, getKey, getValue, getProjectValue } from './localStorage';
import { createTask, Task, taskArray } from './task';


function listeners() {
  const addBtn = document.getElementById('addForm');
  const cancelBtn = document.getElementById('cancel');
  projectListener();

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rtContent = document.querySelector('.rtContent');
    const task = createTask();
    postData(task);
    formHidden();
    const key = task.project;
    const values = getProjectValue(key);
    rtContent.textContent = ' ';
    rightContainer(key, values);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 10);
  });

  cancelBtn.addEventListener('click', () => formHidden());
}

function projectListener() {
  const btns = document.querySelectorAll('.project');
  const rtContent = document.querySelector('.rtContent');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { key } = btn.dataset;
      const values = getProjectValue(key);
      rtContent.textContent = ' ';
      rightContainer(key, values);
      // console.log(value);
    });
  });
}

export default listeners;


import { rightContainer } from './dom';
import { formHidden } from './form';
import { postData, getKey, getValue, getProjectValue } from './localStorage';
import  { createTask, Task, taskArray } from './task';

function listeners() {
  const addBtn = document.getElementById('addBtn');
  projectListener()
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = createTask();
    postData(task);
    formHidden();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 10);
  });
}

function projectListener() {
  const btns = document.querySelectorAll('.project');
  const rtContent = document.querySelector('.rtContent');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const {key} = btn.dataset;
      const values = getProjectValue(key);
      rtContent.textContent = ' ';
      rightContainer(values);
      // console.log(value);
    });
  })
}

export default listeners;

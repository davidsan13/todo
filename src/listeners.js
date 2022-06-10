
import { formHidden } from './form';
import { postData, getKey, getValue } from './localStorage';
import  { createTask, Task, taskArray } from './task';

function listeners() {
  const addBtn = document.getElementById('addBtn');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = createTask();
    postData(task);
    formHidden();
    setTimeout(() => {
      window.location.reload();
    }, 10);
  });
}

export default listeners;

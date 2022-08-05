import { rightContainer } from './dom';
import { formHidden } from './form';
import { postData, getKey, getValue, getProjectValue, removeTask } from './localStorage';
import { CreateTask} from './task';
import today from './today';
import priority from './priority';

// move to dom.js
function renderRtContainer() {
  const rtContent = document.querySelector('.rtContent');
  rtContent.classList.remove('priority', 'today')
  rtContent.textContent = ' ';
  
}

function listeners() {
  const addBtn = document.getElementById('addForm');
  const cancelBtn = document.getElementById('cancel');
  projectListener(); //Need to add to index.js and delete after
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = CreateTask();
    postData(task);
    formHidden();
    const key = task.project;
    const values = getProjectValue(key).tasksList;
    renderRtContainer(key, values);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 10);
  });

  // todayListener();
  urgentListener();
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
      const parentClassName = target.parentNode.className;
      if (parentClassName.includes('priority')) {
        priority();
      } else if (parentClassName.includes('today')) {
        today();
      } else {
        renderRtContainer(key, value);
      }
      deleteListener();
    });
  });
}

function projectListener() {
  const btns = document.querySelectorAll('.project');
  const project = {}
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { key } = btn.dataset;
      const value = getProjectValue(key).tasksList;
      project[key]= value;
      renderRtContainer();
      rightContainer(project);
    });
  });
}
// Might delete include in urgentListener
// function todayListener() {
//   const btn = document.querySelector('.today');
//   btn.addEventListener('click', () => {
//     const rtContent = document.querySelector('.rtContent');
//     rtContent.textContent = ' ';
//     today();
//     deleteListener();
//   });
// }

function urgentListener() {
  const btns = document.querySelectorAll('.urgent');
  
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const rtContent = document.querySelector('.rtContent');
      rtContent.textContent = ' ';
      const active = document.querySelector('.active');
      if(active != null) {
        active.classList.remove('active');
      }
      const btnData = btn.dataset.key;
      btn.classList.add('active')
      if(btnData === 'priority') {
        rtContent.classList.add('priority')
        rtContent.classList.remove('today');
        priority()
      } else {
        rtContent.classList.add('today')
        rtContent.classList.remove('priority');
        today()
      }
      deleteListener();
    });
  }) 
}


export { listeners, deleteListener, renderRtContainer };

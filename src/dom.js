import { form, formActive } from './form';
import { getProject, getKey } from './localStorage';

function renderData() {
  const projects = getKey();
  const container = document.createElement('div');
  projects.forEach((item) => {
    const project = document.createElement('div');
    const taskCon = document.createElement('div');
    taskCon.classList.add('taskContent');
    project.classList.add('projectContent');
    project.textContent = item;
    const values = JSON.parse(localStorage.getItem(item));
    values.forEach((value) => {
      const task = document.createElement('div');
      task.textContent = value.title;
      taskCon.appendChild(task);
    });
    project.appendChild(taskCon);
    container.appendChild(project);
  });
  return container;
}

function renderLayout() {
  const main = document.createElement('div');
  const rtCon = document.createElement('div');
  const ltCon = document.createElement('div');
  const btn = document.createElement('button');
  const allCon = document.createElement('div');
  const project = document.createElement('div');
  const today = document.createElement('div');
  const h1 = document.createElement('h1');

  main.classList.add('main');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');
  btn.classList.add('addBtn');
  allCon.classList.add('allCon');
  project.classList.add('project');
  today.classList.add('today');

  btn.textContent = '+';
  h1.textContent = 'Title';
  project.textContent = 'Project';
  today.textContent = 'Today';

  project.appendChild(renderData());
  allCon.appendChild(h1);
  allCon.appendChild(today);
  allCon.appendChild(project);
  ltCon.appendChild(allCon);
  rtCon.appendChild(btn);
  main.appendChild(form());
  main.appendChild(ltCon);
  main.appendChild(rtCon);

  return main;
}

const listener = () => {
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', () => formActive());
};

export { renderLayout, listener };

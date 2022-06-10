import { form, formActive } from './form';
import { getProject } from './localStorage';

function renderData() {
  const projects = getProject();
  const container = document.createElement('div');
  projects.forEach((item) => {
    let project = document.createElement('div');
    project.classList.add(item);
    project.textContent = item;
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
  const today = document.createElement('today');

  main.classList.add('main');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');
  btn.classList.add('addBtn');
  allCon.classList.add('allCon');
  project.classList.add('project');
  today.classList.add('today');

  btn.textContent = '+';
  project.textContent = 'Project';
  today.textContent = 'Today';

  project.appendChild(renderData());
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

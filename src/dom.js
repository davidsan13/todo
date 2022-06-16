import { form, formActive } from './form';
import { getProject, getKey } from './localStorage';

function renderData() {
  const projects = getKey();
  const container = document.createElement('div');
  container.classList.add('projectContent');
  projects.forEach((item) => {
    const project = document.createElement('div');
    const taskCon = document.createElement('div');
    taskCon.classList.add('taskContent');
    project.classList.add('project');
    project.dataset.key = item;
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
  const rtContent = document.createElement('div');
  const ltCon = document.createElement('div');
  const btn = document.createElement('button');
  const allCon = document.createElement('div');
  const project = document.createElement('h2');
  const today = document.createElement('h2');
  const priority = document.createElement('h2');
  const h1 = document.createElement('h1');

  main.classList.add('main');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');
  btn.classList.add('addBtn');
  allCon.classList.add('allCon');
  project.classList.add('projectHead');
  today.classList.add('today');
  rtContent.classList.add('rtContent');

  btn.textContent = '+';
  h1.textContent = 'Title';
  project.textContent = 'Projects';
  today.textContent = 'Today';
  priority.textContent = 'Highest Priority';

  project.appendChild(renderData());
  allCon.appendChild(h1);
  allCon.appendChild(priority);
  allCon.appendChild(today);
  allCon.appendChild(project);
  ltCon.appendChild(allCon);
  rtCon.appendChild(rtContent);
  rtCon.appendChild(btn);
  main.appendChild(form());
  main.appendChild(ltCon);
  main.appendChild(rtCon);

  return main;
}

function rightContainer(values) {
  const rtContent = document.querySelector('.rtContent');

  values.forEach((value) => {
    const projectTitle = document.createElement('h1');
    const date = document.createElement('h1');
    const priority = document.createElement('h1');
    const checkbox = document.createElement('input');

    projectTitle.classList.add(value.title);
    date.classList.add('date');
    priority.classList.add('priority');
    checkbox.classList.add('checkbox');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = value.done;
   
    projectTitle.textContent = value.title;

    rtContent.appendChild(checkbox);
    rtContent.appendChild(projectTitle);
  });

  return rtContent;
}

const listener = () => {
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', () => formActive());
};

export { renderLayout, listener, rightContainer };

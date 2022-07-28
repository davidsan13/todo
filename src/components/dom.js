import { form, formActive } from './form';
import { getProject, getKey, valueGetter } from './localStorage';
import { deleteListener } from './listeners';

function renderData() {
  const projects = getKey();
  const container = document.createElement('div');
  container.classList.add('projectContent');
  projects.forEach((item) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.dataset.key = item;
    project.textContent = item;
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
  h1.textContent = 'To Do List';
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

function rightContainer(key, values) {
  const rtContent = document.querySelector('.rtContent');
  const project = document.createElement('h1');
  project.classList.add('rtProjectTitle');
  project.textContent = key;
  rtContent.appendChild(project);
  let index = 0;
  values.forEach((value) => {
    const taskContent = document.createElement('div');
    const projectTitle = document.createElement('h1');
    const date = document.createElement('h1');
    const priority = document.createElement('h1');
    const checkbox = document.createElement('input');
    const icon = document.createElement('div');
    const remove = document.createElement('i');

    taskContent.classList.add('taskItem');
    taskContent.dataset.index = index;
    taskContent.dataset.project = key;
    projectTitle.classList.add(value.title.replace(/ /g, ''));
    date.classList.add('date');
    priority.classList.add('priority');
    checkbox.classList.add('checkbox');
    icon.classList.add('icon');
    remove.classList.add('fa-solid', 'fa-trash');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = value.done;

    projectTitle.textContent = value.title;
    icon.appendChild(remove);
    taskContent.appendChild(checkbox);
    taskContent.appendChild(projectTitle);
    taskContent.appendChild(icon);
    rtContent.appendChild(taskContent);
    index++;
  });

  return rtContent;
}

function defaultProject() {
  const key = 'default';
  const value = valueGetter(key).tasksList;
  rightContainer(key, value);
  deleteListener();
}
const listener = () => {
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', () => formActive());
};

export { renderLayout, listener, rightContainer, defaultProject };

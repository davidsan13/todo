import { form, formActive } from './form';
import { getProject, getKey, valueGetter } from './localStorage';
import navi from './navi';
import Footer from './footer';
import { formActiveListener, deleteListener } from './listeners';

function renderProjectData() {
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

function homeCon() {
  const home = document.createElement('div');
  const inbox = document.createElement('h2');
  const today = document.createElement('h2');
  const priority = document.createElement('h2');
  const inboxIcon = document.createElement('i');
  const todayIcon = document.createElement('i');
  const priorityIcon = document.createElement('i');
  const todayItems = document.createElement('div');
  const inboxItems = document.createElement('div');
  const priorityItems = document.createElement('div');

  todayItems.classList.add('homeItem');
  inboxItems.classList.add('homeItem');
  priorityItems.classList.add('homeItem');
  todayIcon.classList.add('fa-solid', 'fa-calendar-day');
  inboxIcon.classList.add('fa-solid', 'fa-inbox');
  priorityIcon.classList.add('fa-solid', 'fa-triangle-exclamation');

  home.classList.add('home');
  today.classList.add('urgent');
  inbox.classList.add('urgent');
  priority.classList.add('urgent');

  inbox.textContent = 'Inbox';
  today.textContent = 'Today';
  priority.textContent = 'Highest Priority';

  today.dataset.key = 'today';
  priority.dataset.key = 'priority';

  inboxItems.appendChild(inboxIcon);
  inboxItems.appendChild(inbox);
  todayItems.appendChild(todayIcon);
  todayItems.appendChild(today);
  priorityItems.appendChild(priorityIcon);
  priorityItems.appendChild(priority);
  home.appendChild(inboxItems);
  home.appendChild(todayItems);
  home.appendChild(priorityItems);
  return home;
}

function renderLayout() {
  const main = document.createElement('div');
  const rtCon = document.createElement('div');
  const rtContent = document.createElement('div');
  const ltCon = document.createElement('div');
  const allCon = document.createElement('div');
  const project = document.createElement('h2');
  const content = document.createElement('div');

  main.classList.add('main');
  content.classList.add('content');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');
  allCon.classList.add('allCon');
  project.classList.add('projectHead');
  rtContent.classList.add('rtContent');

  project.textContent = 'Projects';

  project.appendChild(renderProjectData());
  allCon.appendChild(homeCon());
  allCon.appendChild(project);
  ltCon.appendChild(allCon);
  // rtContent.appendChild(Inbox());
  rtCon.appendChild(rtContent);
  // rtCon.appendChild(form());
  content.appendChild(ltCon);
  content.appendChild(rtCon);
  content.appendChild(form());
  // main.appendChild(form());
  main.appendChild(navi());
  // main.appendChild(ltCon);
  main.appendChild(content);
  main.appendChild(Footer());

  return main;
}

function rightContainer(object) {
  const rtContent = document.querySelector('.rtContent');
  const btn = document.createElement('button');
  btn.classList.add('addBtn');
  btn.textContent = '+ Add Task';
  let index = 0;
  if (Object.keys(object).length === 0 ) {
    const h1 = document.createElement('h1');
    h1.textContent = 'You Do Not Have Any Tasks. Add A Task.';
    rtContent.appendChild(h1);
    rtContent.appendChild(btn);
    formActiveListener();
    deleteListener();
    return rtContent;
  }
  Object.keys(object).forEach((key) => {
    const project = document.createElement('h1');
    project.classList.add('rtProjectTitle');
    project.textContent = key;
    rtContent.appendChild(project);
    object[key].forEach((value) => {
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
      taskContent.setAttribute('for', index);

      projectTitle.textContent = value.title;
      icon.appendChild(remove);
      taskContent.appendChild(checkbox);
      taskContent.appendChild(projectTitle);
      taskContent.appendChild(icon);
      rtContent.appendChild(taskContent);
      index++;
    });
  });
  rtContent.appendChild(btn);
  formActiveListener();
  deleteListener();
  return rtContent;
}

function ClearRtContainer() {
  const rtContent = document.querySelector('.rtContent');
  rtContent.classList.remove('priority', 'today', 'inbox');
  rtContent.textContent = ' ';
  return rtContent;
}

export { renderLayout, ClearRtContainer, rightContainer };

import { Project } from './task';
function postData(task) {
  const project = localStorage.getItem(task.project);
  const projectKey = task.project;

  if (project) {
    const items = JSON.parse(localStorage.getItem(projectKey));
    items.tasksList.push(task);
    localStorage.setItem(projectKey, JSON.stringify(items));
  } else {
    const createProject = Project(task);
    createProject.addTask();
    localStorage.setItem(projectKey, JSON.stringify(createProject));
  }
}

function update(key, item){
  localStorage.setItem(key, JSON.stringify(item));
}
function getKey() {
  const keys = Array(Object.keys(localStorage));
  return keys[0];
}
// Get all key and values associated with key
function getValue() {
  const values = [];
  const keys = getKey();
  keys.forEach((key) => {
    values.push(JSON.parse(localStorage.getItem(key)));
  });
  return values;
}

function valueGetter(key) {
  const values = JSON.parse(localStorage.getItem(key));

  return values;
}

function getProjectValue(project) {
  return JSON.parse(localStorage.getItem(project));
}

function getProject() {
  const projects = [];
  const values = getValue();
  values.forEach((value) => {
    if (!(value.project in projects)) {
      projects.push(value.project);
    }
  });
  return projects;
}

function removeTask(key, index) {
  const tasks = getProjectValue(key);
  tasks.tasksList.splice(index, 1);
  update(key, tasks);
  return tasks;
}

export { postData, getKey, getValue, getProject, getProjectValue, removeTask, valueGetter };

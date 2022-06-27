function postData(task) {
  const project = localStorage.getItem(task.project);
  const projectKey = task.project;

  if (project) {
    const items = JSON.parse(localStorage.getItem(projectKey));
    items.push(task);
    localStorage.setItem(projectKey, JSON.stringify(items));
  } else {
    localStorage.setItem(projectKey, JSON.stringify(Array(task)));
  }
}

function getKey() {
  const keys = Array(Object.keys(localStorage));
  return keys[0];
}

function getValue() {
  const values = [];
  const keys = getKey();
  keys.forEach((key) => {
    values.push(JSON.parse(localStorage.getItem(key)));
  });
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

export { postData, getKey, getValue, getProject, getProjectValue };

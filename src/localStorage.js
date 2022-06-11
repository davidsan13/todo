function postData(task) {
  const project = localStorage.getItem(task.project);
  if (project) {
    const items = JSON.parse(localStorage.getItem(task.project));
    items.push(task);
    localStorage.setItem(task.project, JSON.stringify(items));
  } else {
    localStorage.setItem(task.project, JSON.stringify(Array(task)));
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

export { postData, getKey, getValue, getProject };

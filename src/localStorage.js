function postData(task) {
  const title = task.title;
  window.localStorage.setItem(title, JSON.stringify(task));
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

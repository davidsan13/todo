const Task = (title, date, priority, project) => {
  let done = false;

  const isDone = () => {
    done = true;
  }

  return { title, date, priority, project, done };
}


function createTask() {
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('pri').value;
  let project = document.getElementById('pro').value;
  const done = document.getElementById('done').value;

  if (project == null || project === '') {
    project = 'default';
  }

  const task1 = Task(title, date, priority, project, done);

  return task1;
}

export { Task, createTask };

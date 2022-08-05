const Task = (title, date, priority, project) => {
  let done = false;

  const isDone = () => {
    done = true;
  };

  return { title, date, priority, project, done };
};

const Project = (task) => {
  const tasksList = [];

  const addTask = () => {
    tasksList.push(task);
  };
  return { tasksList, addTask };
};

function CreateTask() {
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('pri').value;
  let project = document.getElementById('pro').value;
  const done = document.getElementById('done').value;

  if (project == null || project === '') {
    project = 'Default';
  }
  project = project.charAt(0).toUpperCase() + project.slice(1)
  const task1 = Task(title, date, priority, project, done);

  return task1;
}

export { Task, CreateTask, Project };

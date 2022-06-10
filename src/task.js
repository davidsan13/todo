const Task = (title, date, priority, project) => {
  let done = false;
  

  // const getTitle = () => title;
  // const getDate = () => date;
  // const getPriority = () => priority;
  // const getProject = () => project;
  // const getId = () => id;
  // const getDone = () => done;
  // const isDone = () => {
  //   done = true;
  // };

  // const update = () =>
  return { title, date, priority, project, done };
  // return { getTitle, getDate, getId, getProject, getPriority, getDone, isDone, };
};

function createTask() {
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('pri').value;
  const project = document.getElementById('pro').value;

  const task1 = Task(title, date, priority, project);

  return task1;
}

function increment() {
  let id = 0;


  return id
}
const taskArray = [];

export { Task, taskArray, createTask };

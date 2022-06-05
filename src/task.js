

const Task = (title, description, date, priority) => {
  let done = false;
  const tasks = [];

  // const getTitle = () => title;
  // const getDate = () => date;
  // const isDone = () => {
  //   done = true;
  // }
  const addTask = () => tasks.push(Task);
  // update
  // delete
  // return { getTitle, isDone, done, addTask };
  return { title, date, addTask, tasks };
}

// function Task(title, date) {
//   return { title, date };
// }

export default Task;

// task1 = Task('task1', '10')
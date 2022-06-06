

const Task = (title, description, date, priority, project) => {
  let done = false;

  const getTitle = () => title;
  const getDate = () => date;
  const getPriority = () => priority;
  const getProject = () => project;
  const isDone = () => {
    done = true;
  };

  // const update = () => 

  return { getTitle, getDate, isDone };
}

// function Task(title, date) {
//   return { title, date };
// }

export default Task;

// task1 = Task('task1', '10')
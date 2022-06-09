import  { Task, taskArray } from './task';

function listeners() {
  const addBtn = document.getElementById('addBtn');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('pri').value;
    const project = document.getElementById('pro').value;

    const task1 = Task(title, description, date, priority, project);
    taskArray.push(task1);
    console.log(taskArray[0].getTitle());
    
  });
 
};

export default listeners;

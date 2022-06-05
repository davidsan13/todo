import './style.css';
import Task from './task';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hello world';
  console.log('hello');
  const task1 = Task('task11', '1');
  task1.addTask();
  console.log(task1.tasks);
  return element;
}

document.body.appendChild(component());

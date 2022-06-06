import './style.css';
import Task from './task';
import form from './form';

function component() {
  const element = document.createElement('div');

  element.appendChild(form());
  
  return element;
}

document.body.appendChild(component());

import './styles/style.css';
import Task from './task';
import form from './form';
import { renderLayout, listener } from './dom';
import listeners from './listeners';
import { getProject } from './localStorage';

function component() {
  // const element = document.createElement('div');
  // const element = renderLayout();

  // element.appendChild(form());
  document.body.appendChild(renderLayout());
  listener();
  listeners();
  getProject();
}
component();
// document.body.appendChild(component());

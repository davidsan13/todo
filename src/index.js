import './styles/style.css';
import Task from './task';
import form from './form';
import { renderLayout, listener } from './dom';
import listeners from './listeners';

function component() {
  // const element = document.createElement('div');
  // const element = renderLayout();

  // element.appendChild(form());
  document.body.appendChild(renderLayout());
  listener();
  listeners();
}
component();
// document.body.appendChild(component());

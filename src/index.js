import './styles/style.css';
import Task from './task';
import form from './form';
import { renderLayout, listener } from './dom';
import listeners from './listeners';
import { getProject } from './localStorage';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';

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

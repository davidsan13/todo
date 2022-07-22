import './styles/style.css';
import Task from './task';
import form from './form';
import { renderLayout, listener, defaultProject } from './dom';
import { listeners } from './listeners';
import { getProject } from './localStorage';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import Today from './today';

function component() {
  // const element = document.createElement('div');
  // const element = renderLayout();

  // element.appendChild(form());
  document.body.appendChild(renderLayout());
  defaultProject()
  listener();
  listeners();
  getProject();
  Today();
}
component();
// document.body.appendChild(component());

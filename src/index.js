import './styles/style.css';
//importing font awesome
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import Task from './components/task';
import form from './components/form';
import { renderLayout, listener, defaultProject } from './components/dom';
import { listeners } from './components/listeners';
import { getProject } from './components/localStorage';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import Today from './components/today';

// library.add(faCheck);
// dom.watch();
function component() {
  // const element = document.createElement('div');
  // const element = renderLayout();

  // element.appendChild(form());
  document.body.appendChild(renderLayout());
  defaultProject();
  listener();
  listeners();
  getProject();
}
component();
// document.body.appendChild(component());

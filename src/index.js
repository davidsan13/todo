import './styles/style.css';
import { renderLayout } from './components/dom';
import { allListeners } from './components/listeners';
import Inbox from './components/inbox';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import Today from './components/today';
import { formActive } from './components/form';


function component() {
  // element.appendChild(form());
  document.body.appendChild(renderLayout());
  Inbox();
  allListeners();
}
component();
// document.body.appendChild(component());

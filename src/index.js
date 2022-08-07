import './styles/style.css';
//importing font awesome
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { renderLayout } from './components/dom';
import { listeners, formActiveListener, allListeners } from './components/listeners';

import Inbox from './components/inbox';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import Today from './components/today';
import { formActive } from './components/form';

// library.add(faCheck);
// dom.watch();
function component() {
  // const element = document.createElement('div');
  // const element = renderLayout();

  // element.appendChild(form());
  document.body.appendChild(renderLayout());
  Inbox();
  formActiveListener();
  allListeners();
}
component();
// document.body.appendChild(component());

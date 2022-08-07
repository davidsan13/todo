import { getKey, valueGetter } from './localStorage';
import { rightContainer } from './dom';
import { deleteListener, list, listeners } from './listeners';

export default function Inbox() {
  const rtContent = document.querySelector('.rtContent');
  rtContent.textContent = ' ';
  rtContent.classList.add('inbox');
  const keys = getKey();
  const project = {};
  keys.forEach((key) => {
    const tasks = valueGetter(key).tasksList;
    project[key] = tasks;
  });
  rightContainer(project);
  listeners();
  deleteListener();
}

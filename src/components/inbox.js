import { getKey, valueGetter } from './localStorage';
import { rightContainer } from './dom';

export default function Inbox() {
  const rtContent = document.querySelector('.rtContent');
  rtContent.textContent = ' ';
  rtContent.classList.add('inbox');

  const keys = getKey();
  const project = {};
  if(keys === ' ') {
    rightContainer(project);
  }
  keys.forEach((key) => {
    const tasks = valueGetter(key).tasksList;
    if (tasks.length > 0) {
      project[key] = tasks;
    }
  });
  rightContainer(project);
}

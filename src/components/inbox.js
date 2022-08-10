import { getKey, valueGetter } from './localStorage';
import { rightContainer } from './dom';

export default function Inbox() {
  const rtContent = document.querySelector('.rtContent');
  const h1 = document.createElement('h1');
  rtContent.textContent = ' ';
  rtContent.classList.add('inbox');

  h1.textContent = 'You Do Not Have Any Tasks. Add A Task.';
  const keys = getKey();
  const project = {};
  keys.forEach((key) => {
    const tasks = valueGetter(key).tasksList;
    if (tasks.length > 0) {
      project[key] = tasks;
    }
  });
  if (Object.keys(project).length === 0) {
    rtContent.appendChild(h1);
  }
  rightContainer(project);
}

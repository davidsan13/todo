import { rightContainer } from './dom';
import { getKey, valueGetter } from './localStorage';

function hasTodayTask(key) {
  const priority = 'High';
  const values = valueGetter(key).tasksList;
  const tasks = [];
  if (values != null) {
    values.forEach((value) => {
      if (value.priority === priority) {
        tasks.push(value);
      }
    });
  }

  return tasks;
}

export default function priority() {
  const rtContent = document.querySelector('.rtContent');
  rtContent.textContent = ' ';
  const keys = getKey();
  const project = {};
  keys.forEach((key) => {
    const tasks = hasTodayTask(key);
    if (tasks != null && tasks.length > 0) {
      project[key] = tasks;
    }
  });
  rightContainer(project);
}
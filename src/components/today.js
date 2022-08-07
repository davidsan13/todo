// Get all tasks from projects
// Filter tasks that has a do date equal to today
import {rightContainer } from './dom'
import { getKey, valueGetter } from './localStorage';
import { compareAsc, format } from 'date-fns';
import { deleteListener, listeners } from './listeners';

function hasTodayTask(key) {
  const today = format(new Date(), 'yyyy-MM-dd');
  
  const values = valueGetter(key).tasksList;
  const tasks = [];
  if (values != null) {
    values.forEach((value) => {
      if (value.date === today) {
        tasks.push(value);
      }
    });
  }
  return tasks;
}
export default function Today() {
  const rtContent = document.querySelector('.rtContent');
  rtContent.textContent = ' ';
  rtContent.classList.add('today');
  const keys = getKey();
  const project = {};
  keys.forEach((key) => {
    const tasks = hasTodayTask(key);
    if (tasks != null && tasks.length > 0) {
      project[key] = tasks;
    }
  });
  rightContainer(project);
  deleteListener();
  listeners();
};

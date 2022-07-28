// Get all tasks from projects
// Filter tasks that has a do date equal to today
import {rightContainer } from './dom'
import { getKey, valueGetter } from './localStorage';

function hasTodayTask(key) {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const values = valueGetter(key).tasksList;
  const tasks = [];
  if (values != null) {
    values.forEach((value) => {
      if (value.date === date) {
        tasks.push(value);
      }
    });
  }

  return tasks;
}
export default function today() {
  
  const projectTasksNow = [];
  const keys = getKey();
  const project = {};
  keys.forEach((key) => {
    const tasks = hasTodayTask(key);
    if (tasks != null && tasks.length > 0) {
      project[key] = tasks;
    }
  });
  Object.keys(project).forEach((key) => {
    rightContainer(key, project[key]);
  });
}

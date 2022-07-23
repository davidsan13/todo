// Get all tasks from projects
// Filter tasks that has a do date equal to today
import { getKey, valueGetter } from './localStorage';

function hasTodayTask(key) {
  // const today = new Date();
  // const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const date = '2022-07-22';
  const values = valueGetter(key).tasksList;
  const tasks = [];
  if (values != null) {
    values.forEach((value) => {
      if (value.date == date) {
        tasks.push(value);
      }
    })
    return tasks;
  }

  
}
export default function Today() {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const projectTasksNow = [];
  const keys = getKey();
  const project = {};
  // hasTodayTask('new2')
  keys.forEach((key) => {
    const tasks = hasTodayTask(key);
    if(tasks!= null) {
      project[key] = tasks;
    }
  });
  // const asArray = Object.entries(project);
  // const filtered = asArray.filter(([key, value]) => value.length > 0);
  // const s = Object.fromEntries(filtered);
  console.log(project)

}


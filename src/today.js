// Get all tasks from projects
// Filter tasks that has a do date equal to today
import { getKey } from './localStorage';


export default function Today() {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const projectTasksNow = [];
  const keys = getKey();
  keys.forEach((key) => console.log(key)) 
  console.log(keys)
  
}


function form() {
  const taskForm = document.createElement('form');
  const titleLl = document.createElement('label');
  const titleInp = document.createElement('input');
  const desLl = document.createElement('label');
  const desInp = document.createElement('input');
  const dateLl = document.createElement('label');
  const dateInp = document.createElement('input');
  const priLl = document.createElement('label');
  const priSel = document.createElement('select');
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');
  const opt3 = document.createElement('option');
  const proLl = document.createElement('label');
  const proInp = document.createElement('input');

  titleLl.htmlFor = 'title';
  titleLl.textContent = 'Title';
  titleInp.setAttribute('id', 'title');
  titleInp.setAttribute('type', 'text');
  titleInp.setAttribute('name', 'title');

  desLl.htmlFor = 'desc';
  desLl.textContent = 'Description';
  desInp.setAttribute('id', 'desc');
  desInp.setAttribute('type', 'text');
  desInp.setAttribute('name', 'desc');

  dateLl.htmlFor = 'date';
  dateLl.textContent = 'Date';
  dateInp.setAttribute('id', 'date');
  dateInp.setAttribute('type', 'date');
  dateInp.setAttribute('name', 'date');

  priLl.htmlFor = 'pri';
  priLl.textContent = 'Priority';
  priSel.setAttribute('id', 'pri');
  priSel.setAttribute('name', 'pri');
  opt1.setAttribute('value', 'High');
  opt1.textContent = 'High';
  opt2.setAttribute('value', 'Mid');
  opt2.textContent = 'Mid';
  opt3.setAttribute('value', 'Low');
  opt3.textContent = 'Low';

  proLl.htmlFor = 'pro';
  proLl.textContent = 'Project';
  proInp.setAttribute('id', 'pro');
  proInp.setAttribute('type', 'text');
  proInp.setAttribute('name', 'pro');

  priSel.appendChild(opt1);
  priSel.appendChild(opt2);
  priSel.appendChild(opt3);

  taskForm.appendChild(titleLl);
  taskForm.appendChild(titleInp);
  taskForm.appendChild(desLl);
  taskForm.appendChild(desInp);
  taskForm.appendChild(dateLl);
  taskForm.appendChild(dateInp);
  taskForm.appendChild(priLl);
  taskForm.appendChild(priSel);
  taskForm.appendChild(proLl);
  taskForm.appendChild(proInp);

  return taskForm;
}

export default form;

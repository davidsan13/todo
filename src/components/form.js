function form() {
  const formCon = document.createElement('div');
  const taskForm = document.createElement('form');
  const titleLl = document.createElement('label');
  const titleInp = document.createElement('input');
  const dateLl = document.createElement('label');
  const dateInp = document.createElement('input');
  const priLl = document.createElement('label');
  const priSel = document.createElement('select');
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');
  const opt3 = document.createElement('option');
  const proLl = document.createElement('label');
  const proInp = document.createElement('input');
  const cancel = document.createElement('button');
  const addBtn = document.createElement('input');

  formCon.classList.add('formCon');

  titleLl.htmlFor = 'title';
  titleLl.textContent = 'Task';
  titleInp.setAttribute('placeholder', 'Task');
  titleInp.setAttribute('id', 'title');
  titleInp.setAttribute('type', 'text');
  titleInp.setAttribute('name', 'title');

  dateLl.htmlFor = 'date';
  dateLl.textContent = 'Date';
  dateInp.setAttribute('placeholder', 'Date');
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
  proInp.setAttribute('placeholder', 'Project');
  proInp.setAttribute('id', 'pro');
  proInp.setAttribute('type', 'text');
  proInp.setAttribute('name', 'pro');

  cancel.textContent = 'Cancel';
  cancel.setAttribute('id', 'cancel');
  cancel.setAttribute('value', 'cancel');
  cancel.setAttribute('type', 'button');
  addBtn.textContent = 'Add Task';
  addBtn.setAttribute('id', 'addForm');
  addBtn.setAttribute('value', 'Add');
  addBtn.setAttribute('type', 'submit');

  priSel.appendChild(opt1);
  priSel.appendChild(opt2);
  priSel.appendChild(opt3);
  taskForm.appendChild(titleLl);
  taskForm.appendChild(titleInp);
  taskForm.appendChild(dateLl);
  taskForm.appendChild(dateInp);
  taskForm.appendChild(priLl);
  taskForm.appendChild(priSel);
  taskForm.appendChild(proLl);
  taskForm.appendChild(proInp);
  taskForm.appendChild(addBtn);
  taskForm.appendChild(cancel);
  formCon.appendChild(taskForm);
  return formCon;
}

function formActive() {
  const formEl = document.querySelector('.formCon');
  formEl.classList.add('active');
}

function formHidden() {
  const formEl = document.querySelector('.formCon');
  formEl.classList.remove('active');
}

export { form, formActive, formHidden };

import form from './form';

function renderLayout() {
  const main = document.createElement('div');
  const rtCon = document.createElement('div');
  const ltCon = document.createElement('div');
  const btn = document.createElement('button');

  main.classList.add('main');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');
  btn.classList.add('addBtn');

  btn.textContent = '+';
  rtCon.appendChild(btn);
  main.appendChild(form());
  main.appendChild(ltCon);
  main.appendChild(rtCon);

  
  return main;
}

const listener = () => {
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', () => document.body.appendChild(form()));
};



export { renderLayout, listener };

import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hello world';
  console.log('hello');

  return element;
}

document.body.appendChild(component());

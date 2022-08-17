import Hamburger from './hamburger';

export default function navi() {
  const nav = document.createElement('div');
  const title = document.createElement('h1');
  nav.classList.add('nav');
  title.textContent = 'To Do List';
  
  nav.appendChild(Hamburger());
  nav.appendChild(title);
  

  return nav;
}

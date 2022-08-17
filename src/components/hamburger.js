export default function Hamburger() {
  const container = document.createElement('div');
  const label = document.createElement('label');
  const hamIcon = document.createElement('i');
  const close = document.createElement('i');

  container.classList.add('hamburger');
  label.setAttribute('for', 'toggle');
  hamIcon.classList.add('fas', 'fa-bars', 'hamburger');
  close.classList.add('fa-solid', 'fa-x');

  container.appendChild(label);
  container.appendChild(hamIcon);
  container.appendChild(close);

  return container;
}

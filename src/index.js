import name from './name';

const element = document.createElement('div');
element.textContent = name("John");

document.body.appendChild(element);
import './style.css';
import pageLoad from './init';
import homePage from './home'
import renderInfo from './menu'

const element = document.getElementById('content');

element.appendChild(pageLoad());
// element.appendChild(homePage());
element.appendChild(renderInfo());


import './style.css';
import pageLoad from './init';
import homePage from './home'
import renderInfo from './menu'
import {night, changeText, closed} from './night'

const element = document.getElementById('content');

element.appendChild(pageLoad());
element.appendChild(homePage());  


const home = document.getElementById('logo');
const menu = document.getElementById('menu');
const lights = document.getElementById('night');

home.onclick = () => {
    clear_page(element);
    element.appendChild(homePage());    
}

menu.onclick = () => {
    clear_page(element); 
    element.appendChild(renderInfo());
}

lights.onclick = () => {
    night();
    changeText();
    closed();
}


function clear_page(parent){
    
    parent.removeChild(parent.lastChild);
    
}


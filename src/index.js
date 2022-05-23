import './style.css';
import pageLoad from './init';
import homePage from './home'
import renderInfo from './menu'

const element = document.getElementById('content');

element.appendChild(pageLoad());
element.appendChild(homePage());  


let home = document.getElementById('logo');
let menu = document.getElementById('menu');

home.onclick = () => {
    clear_page(element);
    element.appendChild(homePage());    
}

menu.onclick = () => {
    clear_page(element); 
    element.appendChild(renderInfo());
}


function clear_page(parent){
    
    parent.removeChild(parent.lastChild);
    
}


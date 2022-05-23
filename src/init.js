import './style.css';
import logo from './images/logo.png'

export default function pageLoad() {

    const header = document.createElement('div');
    header.classList.add('header');

    const menu_link = document.createElement('a');
    menu_link.classList.add('link');
    menu_link.setAttribute("id","menu")
    menu_link.innerHTML = "Menu";
    menu_link.href = "#";
    header.appendChild(menu_link);
    
    const mainLogo = new Image();
    mainLogo.src = logo;
    mainLogo.classList.add('logo')

    const logo_link = document.createElement('a');
    logo_link.classList.add("link-logo");
    logo_link.setAttribute("id","logo")
    logo_link.href = "#";
    logo_link.appendChild(mainLogo);
    header.appendChild(logo_link);

    const night_link = document.createElement('a');
    night_link.classList.add("link");
    night_link.setAttribute("id","night");
    night_link.innerHTML = "Turn off lights";    
    
    night_link.href = "#";
    header.appendChild(night_link);

    return header;
}
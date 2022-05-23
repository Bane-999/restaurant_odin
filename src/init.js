import './style.css';
import logo from './images/logo.png'

export default function pageLoad() {

    const doc = document.getElementById('content');
    const header = document.createElement('div');
    header.classList.add('header');
    doc.appendChild(header);

    const menu_link = document.createElement('a');
    menu_link.classList.add('link');
    menu_link.innerHTML = "Menu";
    menu_link.href = "";
    header.appendChild(menu_link);
    
    const mainLogo = new Image();
    mainLogo.src = logo;
    mainLogo.classList.add('logo')

    const logo_link = document.createElement('a');
    logo_link.classList.add("link-logo");
    logo_link.href = "";
    logo_link.appendChild(mainLogo);
    header.appendChild(logo_link);

    const contact_link = document.createElement('a');
    contact_link.classList.add("link");
    contact_link.innerHTML = "Contact";
    contact_link.href = "";
    header.appendChild(contact_link);

    const big_text = document.createElement('div');
    big_text.classList.add("body");
    const text = createElement('h1');
    text.innerHTML = 'BEST FOOD IN BELGRADE';
    big_text.appendChild(text);
    doc.appendChild(big_text);

    return doc;
}
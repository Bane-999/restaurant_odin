import pizza from './images/pizza-5179939_1920.jpg'
import burger from './images/hamburger-5630646_1920.jpg'
import asian from './images/asian-3897789_1920.jpg'

export default function renderInfo() { 

    const background = document.createElement('div');
    background.classList.add('background'); 

    const article = document.createElement('div');
    article.classList.add('article'); 
    background.appendChild(article);
    const article_photo = new Image();
    article_photo.src = pizza;
    article.appendChild(article_photo);
    const title = document.createElement('h2');
    title.textContent = "Capricciosa Pizza";
    article.appendChild(title);
    const text = document.createElement('h3');
    text.textContent = "2€";
    article.appendChild(text);

    const article2 = document.createElement('div');
    article2.classList.add('article'); 
    background.appendChild(article2);
    const article_photo2 = new Image();
    article_photo2.src = burger;
    article2.appendChild(article_photo2);
    const title2 = document.createElement('h2');
    title2.textContent = "Super Burger";
    article2.appendChild(title2);
    const text2 = document.createElement('h3');
    text2.textContent = "3€";
    article2.appendChild(text2);

    const article3 = document.createElement('div');
    article3.classList.add('article'); 
    background.appendChild(article3);
    const article_photo3 = new Image();
    article_photo3.src = asian;
    article3.appendChild(article_photo3);
    const title3 = document.createElement('h2');
    title3.textContent = "Asian Noodles";
    article3.appendChild(title3);
    const text3 = document.createElement('h3');
    text3.textContent = "5€";
    article3.appendChild(text3);

    return background;
}
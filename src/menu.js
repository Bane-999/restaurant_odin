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

    const article2 = document.createElement('div');
    article2.classList.add('article'); 
    background.appendChild(article2);

    const article_photo2 = new Image();
    article_photo2.src = burger;
    article2.appendChild(article_photo2);

    const article3 = document.createElement('div');
    article3.classList.add('article'); 
    background.appendChild(article3);

    const article_photo3 = new Image();
    article_photo3.src = asian;
    article3.appendChild(article_photo3);

    return background;
}
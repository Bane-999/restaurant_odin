export default function renderHome() {    

    const big_text = document.createElement('div');
    big_text.classList.add("body1");
    const text = document.createElement('h1');
    text.innerHTML = 'BEST FOOD IN BELGRADE';
    big_text.appendChild(text);    

    return big_text;
}
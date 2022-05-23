const body = document.querySelector('body');

function night() {

    body.classList.toggle('night');
    return body;
}


function changeText() {

    const night_link = document.getElementById('night');

    if(body.classList.contains('night')) {
        night_link.innerHTML = "Turn on lights";
    }
    else {
        night_link.innerHTML = "Turn off lights";
    }

    return night_link;
}

function closed() {

    const big_text = document.querySelector('h1');

    if(body.classList.contains('night')) {
        big_text.innerHTML = "THE RESTAURANT IS CLOSED";
    }
    else {
        big_text.innerHTML = 'BEST FOOD IN BELGRADE';
    }

    return big_text;
}

export {night, changeText, closed};

window.addEventListener('load', slideshowSetup);

let slideIndex = 0;

function slideshowSetup() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
}

function slideshowNext() {
    // slides is een array van 5 HTML elementen.
    let slides = document.getElementsByClassName('slide');

    // zichtbare slide verbergen
    slides[slideIndex].classList.remove('visible');

    slideIndex += 1; // slideIndex = slideIndex + 1;

    // volgende slide zichtbaar maken
    slides[slideIndex].classList.add('visible');
}
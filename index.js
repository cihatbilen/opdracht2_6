window.addEventListener('load', slideshowSetup);

function slideshowSetup() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
}

function slideshowNext() {
    // slides is een array van 5 HTML elementen.
    let slides = document.getElementsByClassName('slide');

    // eerste slide verbergen
    slides[0].classList.remove('visible');

    // tweede slide zichtbaar maken
    slides[1].classList.add('visible');
}
window.addEventListener('load', slideshowSetup);

let slideIndex = 0;
let slides;

function slideshowSetup() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
    document.getElementById('slideshow-prev').addEventListener('click', slideshowPrevious);
    
    // slides is een array van 5 HTML elementen.
    slides = document.getElementsByClassName('slide');
}

function slideshowNext() {
    // zichtbare slide verbergen
    slides[slideIndex].classList.remove('visible');

    slideIndex += 1; // slideIndex = slideIndex + 1;

    // als einde, dan slideIndex = 0
    if(slideIndex == slides.length) {
        slideIndex = 0;
    }
    
    // volgende slide zichtbaar maken
    slides[slideIndex].classList.add('visible');
}

function slideshowPrevious() {
    // zichtbare slide verbergen
    slides[slideIndex].classList.remove('visible');

    slideIndex -= 1; // slideIndex = slideIndex - 1;

    // als begin, dan slideIndex = 4?
    if(slideIndex == -1) {
        slideIndex = slides.length - 1;
    }
    
    // volgende slide zichtbaar maken
    slides[slideIndex].classList.add('visible');
}
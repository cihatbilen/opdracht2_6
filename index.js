
window.addEventListener("load", slideshowSetup);

  let slideindex= 0;


function slideshowSetup(){
document.getElementById('slideshow-next').addEventListener("click", slideshowNext);


function slideshowNext(){
  let slides = document.getElementsByClassName("slides");

  slideindex= ++;


}

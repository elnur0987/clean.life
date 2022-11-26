$(document).ready(function(){
    $(".carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout: 500,
        autoplayHoverPause: true,
    });
});
let popupBg = document.querySelector( '.popup__bg');
let popup = document.querySelector( '.popup');
let openPopupButtons = document.querySelectorAll(  '.contact-link');
let closePopupButton = document.querySelector( '.close-popup');

openPopupButtons.forEach((button  ) => {
    button.addEventListener('click',  (e  ) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener( 'click', () => {
    popupBg.classList.remove( 'active');
    popup.classList.remove( 'active');
});
document.addEventListener( 'click',  ( e ) => {
    console.log(e.target);
    if(e.target === popupBg) {
        popupBg.classList.remove(  'active');
        popup.classList.remove(  'active');
    }
});

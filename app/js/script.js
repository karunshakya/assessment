const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('no-scroll');
    }else{
        header.classList.add('open');
        body.classList.add('no-scroll');
    }
    if(headerMenu.classList.contains('open')){
        headerMenu.classList.remove('open');
    }else{
        headerMenu.classList.add('open');
    }
    
});


$(document).ready(function(){
    $('.components__list').slick({
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true, 
      });
});
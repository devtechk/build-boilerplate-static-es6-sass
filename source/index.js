// import $ from 'jquery'; Before using jQuery, install it with `npm install --save jquery`


import $ from 'jquery' ;
import './more-javascript/more.js';
import 'normalize.css'; // Note this
import './style/style.sass';
import './style/style.css';
import Swiper from 'swiper';

$(document).ready(function () {
    $('#menu-toggle').click(function(){

        $('.menu-list').toggleClass('clicked');

    });
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
          768: {
              noSwiping: false
          }
        },
    })
});

console.log('indexJS');
/*
To use jQuery, first install it as a dependency: `npm install --save jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('span').mouseover(() => {
  alert('span span!');
});
*/

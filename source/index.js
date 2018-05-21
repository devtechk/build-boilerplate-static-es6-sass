import $ from 'jquery';
//Before using jQuery, install it with `npm install --save jquery`
import './more-javascript/more.js';
import 'normalize.css'; // Note this
import './style/style.sass';
import './style/style.css';
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar-default").addClass("sticky");
    } else {
        $(".navbar-default").removeClass("sticky");
    }
});
$(".navbar-toggle").click(function(e){
    $(".navbar-collapse").toggleClass('open');
    $(".navbar-toggle").toggleClass('close');
    $(".sidepanel-backdrop").toggleClass("overlay");
    $("body").toggleClass("no-scroll");

});

/*
To use jQuery, first install it as a dependency: `npm install --save jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('span').mouseover(() => {
  alert('span span!');
});
*/

'use strict';

$( document ).ready(function() {

console.log("active-nav");

const pathname = window.location.pathname;

const pages = [' ', 'logos', 'sketches', 'fotos', 'tutorials', 'kontakt'];
const pagesen = [' ', 'logos', 'sketches', 'photos', 'tutorials', 'contact'];

$('.nav-link').each(function(i) {
    if (pathname.includes(pages[i]) || pathname.includes(pagesen[i])) $(this).addClass('active');
    else if (this.className.includes('active')) $(this).removeClass('active');
});

});


'use strict';

$( document ).ready(function() {

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

console.log("nav scroll");


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navbar").css("background-color", "yellow");
    $(".navbar-brand").css("font-size", "25px");
  } else {
    $(".navbar").css("padding", "80px");
    $(".navbar-brand").css("font-size", "55px");
  }
}

});
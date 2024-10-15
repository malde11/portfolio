$(document).ready(function() {

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  console.log("nav scroll");

  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    $(".navbar").css("background-color", "white");
    $(".navbar-brand").css("color", "black");
    $(".nav-link").css("color", "black");
    $(".brand-logo").css("display", "none");
    $(".brand-name").css("margin-left", "35px");

  } else {
    $(".navbar").css("background-color", "black");
    $(".navbar-brand").css("color", "white");
    $(".nav-link").css("color", "white");
    $(".brand-logo").css("display", "inline");
    $(".brand-name").css("margin-left", "0px");
  }

}

});
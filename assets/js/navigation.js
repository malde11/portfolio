$(document).ready(function() {

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  console.log("nav scroll");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navbar").css("background-color", "black");
  } else {
    $(".navbar").css("background-color", "black");
  }

}

});
'use strict';

$( document ).ready(function() {

console.log("preloader")

// Preloader function

$(window).on("load", function(){
        
    $(".loader-background").fadeOut("slow", function() {
        $(this).remove();
    });
        
    $(".loader").fadeOut("slow", function() {
        $(this).remove();
    });

});

});
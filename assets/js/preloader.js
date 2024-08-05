'use strict';

// Preloader function

$(window).on("load", function(){
        
    $(".loader-background").fadeOut("slow", function() {
        $(this).remove();
    });
        
    $(".loader").fadeOut("slow", function() {
        $(this).remove();
    });

});
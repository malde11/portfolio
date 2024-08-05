'use strict';

// Preloader function

$(window).on("load", function(){
        
    $(".loader-background").delay(2500).fadeOut("slow", function() {
        $(this).remove();
    });
        
    $(".loader").delay(2500).fadeOut("slow", function() {
        $(this).remove();
    });

});
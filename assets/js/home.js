$(document).ready(function () {
'use strict';

/* navbar */

    $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
          $('.site-navigation').css('background-color', 'white');
          $('.navbar-brand').css('color', 'black');
          $('.nav-link').css('color', 'black');
          $('#logo-icon').attr('src', 'images/logo.png');
        } else {
          $('.site-navigation').css('background-color', 'black'); 
          $('.navbar-brand').css('color', 'white');
          $('.nav-link').css('color', 'white');
          $('#logo-icon').attr('src', 'images/logo-white.png');
        }
      });

    
/* Video */

    const mainVideo = $('#myVideo');
    
    const medi      = "videos/ground_540p.mp4";
    const large     = "videos/ground_1080p.mp4";

    switch ( true ) {

        case ($(window).width() >= 1080):
            mainVideo.append("<source type='video/mp4' src='" + large + "' />");
            break;

        case ($(window).width() >= 720):
            mainVideo.append("<source type='video/mp4' src='" + medi + "' />");
            break;
    
    }
      

});
$(document).ready(function() {

    "use strict";
    
    $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
          $('.site-navigation').css('background', 'white');
          $('#logo-icon').attr('src', 'images/favicon.png');
          $('.navbar-brand').css('color', 'black');
          $('.nav-link').css('color', 'black');
      
          $(".nav-link").mouseover(function() {
            $(this).css("color","#00b4ff");
          }).mouseout(function() {
            $(this).css("color","black");
          });
        
        } else {
          $('.site-navigation').css('background', 'black');
          $('#logo-icon').attr('src', 'images/logo.png');
          $('.navbar-brand').css('color', 'white');
          $('.nav-link').css('color', 'white');
      
          $(".nav-link").mouseover(function() {
            $(this).css("color","#00b4ff");
          }).mouseout(function() {
            $(this).css("color","#fff");
          });
        }
      });
});

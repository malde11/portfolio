$( document ).ready(function() {
    
    console.log( "ready!" );

    var pathname = window.location.pathname,
    pages = [' ', 'logos', 'sketches', 'photos', 'about', 'tutorials', 'contact'];

    $('.nav-link').each(function(i) {
    if (pathname.includes(pages[i])) $(this).addClass('active');
    else if (this.className.includes('active')) $(this).removeClass('active');
    });

});


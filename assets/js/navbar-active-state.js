$( document ).ready(function() {
    
    console.log( "ready!" );

    var pathname = window.location.pathname,
    pages = [' ', 'logos', 'sketches', 'fotos', 'tutorials', 'kontakt'];
    pagesen = [' ', 'logos', 'sketches', 'photos', 'tutorials', 'contact'];

    $('.nav-link').each(function(i) {
        if (pathname.includes(pages[i]) || pathname.includes(pagesen[i])) $(this).addClass('active');
        else if (this.className.includes('active')) $(this).removeClass('active'); 
    });

});


// Scroll Element to change the transparency of the navbar at scroll position
$(window).scroll(function() {
    if($(this).scrollTop() < 100) {
        $('.nav-main').addClass('nav-fade');
    } else {
        $('.nav-main').removeClass('nav-fade');
    }
});

// Scroll Element to change the transparency of the navbar at scroll position
$(window).scroll(function() {
    if($(this).scrollTop() > 50) {
        $('.nav-main').addClass('nav-fade');
        $('.nav-main-list-items a').addClass('text-green');
    } else {
        $('.nav-main').removeClass('nav-fade');
        $('.nav-main-list-items a').removeClass('text-green');
    }
});

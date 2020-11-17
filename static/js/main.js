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


//Sidebar slide in effect to showcase social links and cv
let sideBar = document.getElementById('side-bar-main');
let toTop = document.getElementById('top-button');

window.addEventListener('scroll', () => {
    if(window.scrollY > 700){
        sideBar.classList.add('slide-in');
        toTop.classList.add('slide-in');
    }
    else if (window.scrollY <600) {
         sideBar.classList.remove('slide-in');
         toTop.classList.remove('slide-in');
    } 
})




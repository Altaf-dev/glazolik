$(document).ready(function(){
    var ww = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    $('.mobile__btn').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile__menu').toggleClass('is-active');

        return false;
    });

    $('body').click(function(){
        $('.mobile__btn').removeClass('is-active');
        $('.mobile__menu').removeClass('is-active');
    });
});

function scrollTo($anchor, offset){
    var offset = offset;
    $('html, body').stop().animate({
        scrollTop: $anchor.offset().top - 50 - offset
    }, 500, 'linear');
    event.preventDefault();
}
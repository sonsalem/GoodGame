//menu

$('.toggle-switch').click(function(){
    $(this).toggleClass('active')
    $('.links').toggleClass('active')
});

//carousel

$(document).ready(function(){
    $(".owl-banner").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplayTimeout:4000,
        autoplay: true,
        items:1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
    }
    );
});

// Shuffle Image

$('.actions .content .text.image-shuffle').click(function(){
    $(document.querySelectorAll('.image-shuffle')).removeClass('active')
    $(this).addClass('active')
});

$('.actions .content .text.one').click(function(){
    $(document.querySelectorAll('.dec-shuffle')).addClass('d-none')
    $('.one-text').removeClass('d-none')
});

$('.actions .content .text.tow').click(function(){
    $(document.querySelectorAll('.dec-shuffle')).addClass('d-none')
    $('.tow-text').removeClass('d-none')
});

$('.actions .content .text.three').click(function(){
    $(document.querySelectorAll('.dec-shuffle')).addClass('d-none')
    $('.three-text').removeClass('d-none')
});

$('.actions .content .text.four').click(function(){
    $(document.querySelectorAll('.dec-shuffle')).addClass('d-none')
    $('.four-text').removeClass('d-none')
});

$('.actions .content .text.five').click(function(){
    $(document.querySelectorAll('.dec-shuffle')).addClass('d-none')
    $('.five-text').removeClass('d-none')
});

$('.actions .content .text.six').click(function(){
    $(document.querySelectorAll('.dec-shuffle')).addClass('d-none')
    $('.six-text').removeClass('d-none')
});

// dashboard

$('.suffle-tapped .shuffle-tool').click(function(){
    $(document.querySelectorAll('.suffle-tapped .shuffle-tool')).removeClass('active')
    $(this).addClass('active')
});

$('.suffle-tapped .shuffle-tool').click(function(){
    $(document.querySelectorAll('.suffle-tapped .shuffle-tool')).removeClass('active')
    $(this).addClass('active')
});

$('.suffle-tapped .shuffle-tool.shuffle-one').click(function(){
    $(document.querySelectorAll('.shuffle-content > *')).addClass('d-none')
    $('.shuffle-content .shuffle-content-one').removeClass('d-none')
});

$('.suffle-tapped .shuffle-tool.shuffle-tow').click(function(){
    $(document.querySelectorAll('.shuffle-content > *')).addClass('d-none')
    $('.shuffle-content .shuffle-content-tow').removeClass('d-none')
});

$('.suffle-tapped .shuffle-tool.shuffle-three').click(function(){
    $(document.querySelectorAll('.shuffle-content > *')).addClass('d-none')
    $('.shuffle-content .shuffle-content-three').removeClass('d-none')
});

$('.suffle-tapped .shuffle-tool.shuffle-four').click(function(){
    $(document.querySelectorAll('.shuffle-content > *')).addClass('d-none')
    $('.shuffle-content .shuffle-content-four').removeClass('d-none')
});

$('.suffle-tapped .shuffle-tool.shuffle-five').click(function(){
    $(document.querySelectorAll('.shuffle-content > *')).addClass('d-none')
    $('.shuffle-content .shuffle-content-five').removeClass('d-none')
});

$('.suffle-tapped .shuffle-tool.shuffle-six').click(function(){
    $(document.querySelectorAll('.shuffle-content > *')).addClass('d-none')
    $('.shuffle-content .shuffle-content-six').removeClass('d-none')
});

// image 

$('.screen .image').click(function(){
    $(this).toggleClass('active')
    $('.body').toggleClass('active')
});
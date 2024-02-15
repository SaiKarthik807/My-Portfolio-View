$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 22){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 501){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Html & CSS", "+ Bootstrap", "+ JavaScript", "+ AngularJS", "+ NodeJS & ExpressJS", "+ MongoDB"],
        typeSpeed: 123,
        backSpeed: 51,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Html & CSS", "Bootstrap", "JavaScript", "AngularJS", "NodeJS & ExpressJS", "MongoDB"],
        typeSpeed: 123,
        backSpeed: 51,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 21,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1111,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

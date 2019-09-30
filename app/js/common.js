// Custom JS
//console.log(1);
$(document).ready(function () {
    (function ($) {
        $('.carousel-prosthesis .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:false,
            navSpeed:500,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        $('.carousel-shoes .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:false,
            navSpeed:500,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
        $('.carousel-equipment .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:false,
            navSpeed:500,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    })(jQuery); //.owl-carousel
});
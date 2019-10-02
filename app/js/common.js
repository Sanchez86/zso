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
        });//.owl-carousel

        //for header
        $(window).scroll(function() {
            if($(this).scrollTop() > 0) {
                $('nav').addClass('active');
            }else{
                $('nav').removeClass('active');
            }
        });

        /*btn up*/
        function btn_up(){
            $('.select-click.name-ac .opener').click(function () {
                $(this).parent().toggleClass('active');
            });

            var top_show = 150;
            var delay = 1000;

            $(window).scroll(function () {

                if ($(this).scrollTop() > top_show) $('#top').fadeIn();
                else $('#top').fadeOut();
            });
            $('#top').click(function () {

                $('body, html').animate({
                    scrollTop: 0
                }, delay);
            });
        };
        btn_up();
            /* end btn up*/


    })(jQuery);
});
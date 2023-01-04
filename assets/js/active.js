/* ===================================================================
    Author          : ModinaTheme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

        // new WOW().init();        

        if($('.testimonial-carousel-active').length > 0) {
            $('.testimonial-carousel-active').slick({
                slidesToShow: 3, 
                slidesToScroll: 1, 
                arrows: false,
                dots: true,
                centerMode: true,
                speed: 1100,
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1360,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ],

            });
        }

        if($('.testimonial-nav-carousel-active').length > 0) {
            $('.testimonial-nav-carousel-active').slick({
                slidesToShow: 3, 
                slidesToScroll: 1, 
                arrows: true,
                speed: 950,
                prevArrow: $('.testimonial-nav-prev'),
                nextArrow: $('.testimonial-nav-next'),
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1360,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ],

            });
        }

        if($('.brand-carousel-active').length > 0) {
            $('.brand-carousel-active').slick({
                slidesToShow: 5, 
                slidesToScroll: 3, 
                speed: 800,
                arrows: false,
                responsive: [
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 4
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        center: true,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        center: true,
                      }
                    }
                ],

            });
        }

        if($('.recent-project-carousel').length > 0) {
            $('.recent-project-carousel').slick({
                slidesToShow: 4, 
                slidesToScroll: 2, 
                speed: 999,
                arrows: false,
                dots: false,
                autoplay: true,
                responsive: [
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        center: true,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        center: true,
                      }
                    }
                ],

            });
        }

        if($('.project-gallery').length > 0) {
            $('.project-gallery').slick({
                slidesToShow: 1, 
                slidesToScroll: 1, 
                speed: 888,
                arrows: true,
                dots: false,
                autoplay: true,
                prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-left'></i></button>",
                nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-right'></i></button>"
            });
        }

        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });        

        //# Smooth Scroll
        $('#responsive-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        $('.container').imagesLoaded(function() {
            $('.portfolio-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });

        var catButton = '.portfolio-cat-filter button';

        $(catButton).on('click', function(){
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        $("#mobile-menu").metisMenu();

        /*---------------------------------------------
        Scroll up
        ---------------------------------------------*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

    }); // end document ready function


    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(700).fadeOut();                       
        });
    }

    loader();
})(jQuery); // End jQuery

(function ($) {
    'use strict';      

    // Highlight active page in navigation
    $(document).ready(function() {
        var currentPath = window.location.pathname.split("/").pop();
        if (currentPath === '') {
            currentPath = 'index.html'; // Default to index.html if no path is found
        }
        $('.navbar-nav .nav-item').each(function() {
            var linkPath = $(this).find('.nav-link').attr('href');
            if (linkPath === currentPath) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

        // Sticky Menu
        $(window).scroll(function () {
            if ($('.navigation').offset().top > 100) {
                $('.navigation').addClass('nav-bg');
            } else {
                $('.navigation').removeClass('nav-bg');
            }
        });

        // Background-images
        $('[data-background]').each(function () {
            $(this).css({
                'background-image': 'url(' + $(this).data('background') + ')'
            });
        });

        // background color
        $('[data-color]').each(function () {
            $(this).css({
                'background-color': $(this).data('color')
            });
        });

        // progress bar
        $('[data-progress]').each(function () {
            $(this).css({
                'bottom': $(this).data('progress')
            });
        });

    });

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });

    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

})(jQuery);

'use strict';
$(document).ready(function () {
    $('.main-slider').slick({
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerPadding: '30px',
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });
});
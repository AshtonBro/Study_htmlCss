'use strict';
// * Slider Slick jQuery path of code
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

// * Work with the site on JavaScript
const sliderImg = document.querySelectorAll('.main-slider-block__img'),
    overlay = document.querySelector('.overlay'),
    btnClose = document.querySelector('.popup-close');

const toggleFunc = () => {
    overlay.classList.toggle('is-open');
};


// * Event listeners
sliderImg.forEach(element => {
    element.addEventListener('click', toggleFunc);
});

btnClose.addEventListener('click', toggleFunc);
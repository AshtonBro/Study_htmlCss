jQuery(document).ready(function($) {
    $('.production-slider_top').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.production-slider_bottom'
    });
    $('.production-slider_bottom').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_right"></div>',
        asNavFor: '.production-slider_top',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.feedback-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="feedback-arrow feedback-arrow_left"></div>',
        nextArrow: '<div class="feedback-arrow feedback-arrow_right"></div>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerPadding: '30px',
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: [54.752656, 56.002053],
                zoom: 13,
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent];</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/img/header/header-logo-mobile.png',
                // Размеры метки.
                iconImageSize: [41, 41],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });
});

new WOW().init();
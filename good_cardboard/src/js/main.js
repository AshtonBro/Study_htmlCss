'use strict';

// * Slider Slick jQuery path of code
$(document).ready(function () {
  $(".main-slider").slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: "<div class='slider-arrow slider-arrow_left'></div>",
    nextArrow: "<div class='slider-arrow slider-arrow_right'></div>",
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          centerPadding: "60px",
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "30px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          centerPadding: "30px",
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".reviews-slider").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow-reviews slider-arrow-reviews_left"></div>',
    nextArrow: '<div class="slider-arrow-reviews slider-arrow-reviews_right"></div>',
  });
});

// * Swiper slider
$('[data-fancybox="images"]').fancybox({
  arrows: false,
  touch: false,
  transitionEffect: "none",
  PLAY_START: false,
  loop: false,
  infobar: false,
  dblclickContent: false,
  dblclickSlide: false,
  dblclickOutside: false,
  buttons: ["close"]
});

// * Work with the site on JavaScript
const sliderImg = document.querySelectorAll(".main-slider-block__img"),
  productItem = document.querySelectorAll(".product-item"),
  productOpenner = document.querySelector(".product-openner"),
  modalWindow = document.querySelector(".modal-window"),
  buttonOrder = document.querySelectorAll(".button-order"),
  closeAuth = document.querySelector(".close-auth"),
  popup = document.querySelectorAll('.popup'),
  popupWindow = document.querySelector('.popup-window');

// * asynchronous function, server request and work with JSON bd
const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${response.status}!`
    );
  }
  return await response.json();
};

// * Toggle function for add/remove class
const togglePopup = (elem) => {
  if (document.documentElement.clientWidth > 720) {
    elem.style.display = 'block';
    elem.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      elem.style.transform = 'translateX(0%)';
      elem.style.transition = '0.6s';
    }, 500);
  } else {
    elem.style.display = 'block';
  }

  elem.addEventListener('click', (event) => {
    let target = event.target;
    if (document.documentElement.clientWidth > 720) {
      if (target.classList.contains('close-cross')) {
        elem.style.transform = 'translateX(-100%)';
        elem.style.transition = '0.8s';
      } else {
        if (!target.closest('modal-window') || !target.closest('overlay')) {
          elem.style.transform = 'translateX(-100%)';
          elem.style.transition = '0.8s';
        }
      }
    } else {
      elem.style.display = 'none';
    }
  });
};

// * Hidden the all items witch index nubmer is lower then 8
const hiddenItems = () => {
  for (let i = 8; i < productItem.length; i++) {
    productItem[i].classList.add("is-close");
  }
};

// * Toggle function for special element
const showItem = () => {
  for (let i = 8; i < productItem.length; i++) {
    productItem[i].classList.toggle("is-close");
  }
};

// * Creating a modal window with a description of the flower
const createCardFlower = ({
  id,
  title,
  description
}) => {
  const card = document.createElement("div");
  card.insertAdjacentHTML(
    "beforeend",
    `
    <div class="overlay" data-index="${id}">
      <div class="popup">
        <div class="popup-title">${title}</div>
        <div class="popup-close close-cross">&times;</div>
        <div class="popup-descr">${description}</div>
      </div>
    </div>
    `
  );

  popupWindow.insertAdjacentElement("beforeend", card);
};

// * Find the flower by target and assign parameters to it
const findFlower = () => {
  const targer = event.target;
  const overlay = document.querySelectorAll(".overlay");
  overlay.forEach((elem) => {
    if (elem.dataset.index == targer.alt) {
      togglePopup(overlay[targer.alt - 1]);
    }
  });
};

// * Event listeners
const activateToggle = () => togglePopup(modalWindow);
buttonOrder.forEach(elem => elem.addEventListener('click', activateToggle));
productOpenner.addEventListener("click", showItem);

sliderImg.forEach((elem) => {
  elem.addEventListener("click", findFlower);
});

// * Init functions
hiddenItems();
getData('db/clients-review.json').then((data) => {
  data.forEach(createCardFlower);
});
"use strict";

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
    responsive: [
      {
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
    prevArrow:
      '<div class="slider-arrow-reviews slider-arrow-reviews_left"></div>',
    nextArrow:
      '<div class="slider-arrow-reviews slider-arrow-reviews_right"></div>',
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
  buttons: ["close"],
});

// * Work with the site on JavaScript
const sliderImg = document.querySelectorAll(".main-slider-block__img"),
  overlay = document.querySelector(".overlay"),
  productItem = document.querySelectorAll(".product-item"),
  productOpenner = document.querySelector(".product-openner"),
  modalWindow = document.querySelector(".modal-window"),
  buttonOrder = document.querySelectorAll(".button-order"),
  closeAuth = document.querySelector(".close-auth");

// * Toggle function for add/remove class
const toggleFunc = () => {
  overlay.classList.toggle("is-open");
};

// * Toggle function for add/remove class
const toggleModal = () => {
  modalWindow.classList.toggle("is-open");
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

// * local data base
let obj = {
  flower1: "Роза",
  descr1: `Розы - это цветы не бывало популярны. На данный момент существует несколько тысяч сортов
    роз. Розы это цветы, которые обладают волшебной красотой и притягательностью. Сложено много легенд о сказочной
    розе. Ее любят все, ну и даже преклоняются пред ней. Все народы мира чествуют это прекрасное растение.`,

  flower2: "Лилия",
  descr2: `Цветок Лилия происхождением из Рима и Египта. Эти цветы были почитаемы еще в Древней Греции. Изначально они имели исключительно белую окраску, благодаря которой стали символизировать чистоту и нежность.`,

  flower3: "Георгин",
  descr3: `Племена майя использовали георгины для проведения своих ритуалов. Так называемые «храмы солнца» просто утопали в этих ярких цветах. В древности люди считали георгины посланниками Солнца, им поклонялись и почитали их. `,

  flower4: "Сирень",
  descr4: `Какая девушка не мечтает о том, чтобы ей весной подарили охапку сирени? Красивая, ароматная и невероятно романтичная сирень радует своим цветением. Многие знают о примете – если найти и съесть цветок сирени, на котором пять лепестков и загадать желание – оно непременно исполнится.`,

  flower5: "Гербера",
  descr5: `У каждого вида своя удивительная история путешествия, свои предпочтения и особенности. Среди таких «пришельцев-путешественников» можно встретить удивительную и многоликую герберу. Она символизирует силу и радость жизни, поэтому ее часто дарят на праздники.`,

  flower6: "Азалия",
  descr6: `Азалия — одно из самых красивых горшечных растений, цветущих в зимнее время. Крупных ярких цветков обычно бывает так много, что за ними практически теряется сам небольшой кустик с глянцевыми темно-зелеными листьями.`,

  flower7: "Гербера фиолетовая",
  descr7: `Согласно древним преданиям, георгин считался царским цветком, его выращивали только на территории княжеских садов.`,
};

let flower = "";
let descr = "";

// * Creating a modal window with a description of the flower
const createCardFlower = () => {
  const card = document.createElement("div");
  card.insertAdjacentHTML(
    "beforeend",
    `
        <div class="popup">
            <div class="popup-title">${flower}</div>
            <div class="popup-close">&times;</div>
            <div class="popup-descr">${descr}
            </div>
        </div>
    `
  );

  overlay.insertAdjacentElement("beforeend", card);
};

// * Find the flower by target and assign parameters to it
const findFlower = () => {
  const targer = event.target;
  console.log("targer: ", targer.alt);
  if (targer.alt == "flower-1") {
    flower = obj.flower1;
    descr = obj.descr1;
    createCardFlower();
  }
  if (targer.alt == "flower-2") {
    flower = obj.flower2;
    descr = obj.descr2;
    createCardFlower();
  }
  if (targer.alt == "flower-3") {
    flower = obj.flower3;
    descr = obj.descr3;
    createCardFlower();
  }
  if (targer.alt == "flower-4") {
    flower = obj.flower4;
    descr = obj.descr4;
    createCardFlower();
  }
  if (targer.alt == "flower-5") {
    flower = obj.flower5;
    descr = obj.descr5;
    createCardFlower();
  }
  if (targer.alt == "flower-6") {
    flower = obj.flower6;
    descr = obj.descr6;
    createCardFlower();
  }
  if (targer.alt == "flower-7") {
    flower = obj.flower7;
    descr = obj.descr7;
    createCardFlower();
  }
};

// * Event listeners
productOpenner.addEventListener("click", showItem);
closeAuth.addEventListener("click", toggleModal);
sliderImg.forEach((elem) => {
  elem.addEventListener("click", findFlower);
  elem.addEventListener("click", toggleFunc);
});
overlay.addEventListener("click", () => {
  const targer = event.target;
  if (targer.closest(".popup-close")) {
    toggleFunc();
    document.querySelector(".popup").remove();
  }
});
buttonOrder.forEach((elem) => {
  elem.addEventListener("click", toggleModal);
});

// * Init functions
hiddenItems();

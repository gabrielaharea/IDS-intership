import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";

let Years = ["1996-2004", "2005-2009", "2010-2014", "2015-2021", "2021-2030"];

var swiper = new Swiper(".journey-slider", {
  modules: [Pagination, Navigation, EffectFade],
  wrapperClass: "journey-container",
  effect: "fade",
  speed: 250,
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".journey-pagination",
    clickable: true,
    bulletClass: "journey-bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return `<button type="button" class="${className}">${Years[index]}</button>`;
    },
  },
});

const circleSlider = new Swiper(".circle-slider", {
  modules: [Autoplay, EffectFade,],
  autoplay: {
    delay: 1500,
    waitForTransition: false,
    disableOnInteraction: true,
    virtualTranslate: true,
  },
  effect: "fade",
  fadeEffect: { crossFade: true, },
  allowTouchMove: false,
  on: {
    slideChange: function () {
      const index_currentSlide = circleSlider.realIndex;
      const bigCircle = document.querySelector(".big-circle");
      let removeIndex = index_currentSlide === 0 ? 11 : index_currentSlide - 1;
      bigCircle.classList.add("big-circle-" + index_currentSlide);
      bigCircle.classList.remove("big-circle-" + removeIndex);
    },
  },
});

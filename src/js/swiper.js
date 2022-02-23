import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";

const renderYears = [
  "1966 - 2004",
  "2005 – 2009",
  "2010 - 2014",
  "2015 - 2021",
  "2021 - 2030",
];

const knowledgeSlider = new Swiper(".knowledge-slider", {
  modules: [Pagination, Navigation, EffectFade],
  autoplay: {
    delay: 6700,
    waitForTransition: false,
    pauseOnMouseEnter: true,
  },
  height: 300,
  effect: "fade",
  fadeEffect: { crossFade: true },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className}">${renderYears[index]}</span>`,
  },
});

const circleSlider = new Swiper(".circle-slider", {
  modules: [Autoplay, EffectFade, Pagination],
  autoplay: {
    delay: 1500,
    waitForTransition: false,
    disableOnInteraction: true,
    virtualTranslate: true,
  },
  effect: "fade",
  fadeEffect: { crossFade: true },
  allowTouchMove: false,
  on: {
    slideChange: function () {
      const index_currentSlide = circleSlider.realIndex;
      const bigCircle = document.querySelector(".big-circle");
      const slideWrapper = document.querySelector(".swiper-wrapper");
      let removeIndex = index_currentSlide === 0 ? 11 : index_currentSlide - 1;
      bigCircle.classList.add("big-circle-" + index_currentSlide);
      bigCircle.classList.remove("big-circle-" + removeIndex);
      slideWrapper.classList.add("slide-" + index_currentSlide);
      slideWrapper.classList.remove("slide-" + removeIndex);
    },
  },
  pagination: {
    el: ".pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `
      <span class="space-number">Space <span class="${currentClass}">${currentClass}</span>  </span>
      <div class="pagination-counter"><span class="${currentClass}">${currentClass}</span>/<span class="${totalClass}"> ${totalClass}</span></div>`;
    },
  },
});

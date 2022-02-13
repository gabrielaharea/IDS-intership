import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
// import $ from 'jquery';
let Years = ["1996-2004", "2005-2009", "2010-2014", "2015-2021", "2021-2030"];

var swiper = new Swiper(".journey-slider", {
  modules: [Pagination, Navigation, EffectFade],
  effect: "fade",
  speed: 250,
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",
    // type: 'bullets',
    clickable: true,
    // hideOnClick: true,
    bulletClass: "journey-bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return `<button type="button" class="${className}">${Years[index]}</button>`;
    },
  },
});

import Swiper from "swiper";

let Menu = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

const swiper = new Swiper(".swiper", {
  speed: 400,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: "years-axis",
    click: true,
  },
  initialSlide: 0,
  centeredSlides: true,
});

let index = document.querySelector(".data-swiper-slide-index");

function changeSlide() {}

import Headroom from "headroom.js";
const header = document.querySelector(".header-main");

if (header) {
  const offsetHeader = header.offsetHeight;
  const options = { offset: offsetHeader };

  const headroom = new Headroom(header, options);
  headroom.init();
}

const Menu = {
  isOpened: false,
  el: document.querySelector(".mobile-box"),
  burger: document.querySelector(".burger-btn"),

  show() {
    document.documentElement.classList.add("no-scroll");
    this.el.classList.add("is-active");
    this.burger.classList.add("is-active");
    this.el.classList.add("in");
    this.isOpened = true;
  },

  hide() {
    document.documentElement.classList.remove("no-scroll");
    this.el.classList.remove("is-active");
    this.burger.classList.remove("is-active");
    this.isOpened = false;
  },

  toggle(state) {
    if (state === true || !this.isOpened) {
      return this.show();
    }
    this.hide();
  },
};

const iconBurger = document.querySelector(".icon-burger");
const iconCross = document.querySelector(".icon-cross");

iconBurger.addEventListener("click", (e) => {
  e.preventDefault();
  Menu.show();
});

iconCross.addEventListener("click", (e) => {
  e.preventDefault();
  Menu.hide();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    Menu.hide();
  }
});

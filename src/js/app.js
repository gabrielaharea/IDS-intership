/* Import Styles */
import "../scss/app.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

/* Document ready put your JavaScript code here */
$(() => {});

const mainMenu = document.querySelector(".menu-mobile");
const openMenu = document.querySelector(".burger");
const closeMenu = document.querySelector(".x");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  // mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.display = "none";
}

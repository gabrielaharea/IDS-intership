button = document.querySelector(".circle");

const modifyElement = () => {
  document.querySelector(".vertical").classList.toggle("open");
  document.querySelector(".text").classList.toggle("open");
};

button.addEventListener("click", modifyElement);

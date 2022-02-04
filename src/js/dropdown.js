button.addEventListener("click", myFunction);

function myFunction() {
  textElement = document.getElementById("text");
  if (textElement.classList.contains("text-complete")) {
    textElement.setAttribute("class", "text");
  } else {
    textElement.setAttribute("class", "text-complete");
  }
}

document.querySelector(".circle").addEventListener("click", () => {
  document.querySelector(".vertical").classList.toggle("open");
  document.querySelector(".line-wrapper").classList.toggle("open");
  document.querySelector(".content").classList.toggle("open");
});


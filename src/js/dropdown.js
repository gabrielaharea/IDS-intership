// const text = document.querySelector(".text");
// const button = document.querySelector(".button");

button.addEventListener("click", myFunction);

function myFunction() {
  textElement = document.getElementById("text");
  if (textElement.classList.contains("text-complete")) {
    button.firstChild.data = "Read more";
    textElement.setAttribute("class", "text");
  } else {
    button.firstChild.data = "Read less";
    textElement.setAttribute("class", "text-complete");
  }
}

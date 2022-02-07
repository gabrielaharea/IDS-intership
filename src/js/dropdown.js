// button = document.querySelector(".circle");

// const modifyElement = () => {
//   document.querySelector(".vertical").classList.toggle("open");
//   document.querySelector(".dropdown-description").classList.toggle("open");
// };

// button.addEventListener("click", modifyElement);


const dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownDescription = document.querySelector('.dropdown-description');

if (dropdownBtn) {
  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('is-active');
    dropdownDescription.classList.toggle('is-active');
  });
}
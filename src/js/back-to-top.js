const myButton = document.querySelector('.back-to-top');

if (myButton) {
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.classList.add('show-btn');
    } else {
      myButton.classList.remove('show-btn');
    }
  }
  myButton.addEventListener('click', () => {
    $('html').animate({ scrollTop: 0 }, 1000);
  });

  window.onscroll = function () {
    scrollFunction();
  };
}

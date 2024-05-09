window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var menu = document.querySelector(".menu");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
}
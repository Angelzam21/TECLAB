window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let navbar = document.getElementById("header_sticky");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// function marcarCheckbox() {
//   document.getElementById('menu').checked = true;
// }
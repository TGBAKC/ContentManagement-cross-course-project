let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let isMenuOpen = false;

navBarToggle.addEventListener("click", function () {
  console.log("Hamburger menu clicked");
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mainNav.classList.add("active");
  } else {
    mainNav.classList.remove("active");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    mainNav.classList.remove("active");
  }
});

$(document).ready(function () {
  $("input").on("click", function () {
    $(this).removeClass("border-color");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchBox");
});

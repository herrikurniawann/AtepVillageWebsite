// Hamburger Menu
const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menutoggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
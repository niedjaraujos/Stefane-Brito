//menu hamburguer

const menu = document.querySelector(".menu-hamburguer");
const navList = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar__link");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  menu.classList.toggle("active");
});

// intersection observer para animações de scroll

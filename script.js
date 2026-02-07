//menu hamburguer

const menu = document.querySelector('.menu-hamburguer');
const navList = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar__link');

menu.addEventListener('click', () => {
  navList.classList.toggle('active');
  menu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});
// intersection observer para animações de scroll

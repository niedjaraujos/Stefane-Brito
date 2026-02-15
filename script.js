//menu hamburguer

const menu = document.querySelector(".menu-hamburguer");
const navList = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar__link");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  menu.classList.toggle("active");

  //ação do leitor de tela ao clicar no menu hamburguer,
  // Verifica se está aberto ou fechado
  const isExpanded = navList.classList.contains("active");

  // Atualiza aria-expanded dinamicamente
  menu.setAttribute("aria-expanded", isExpanded);
});

// Intersection Observer para animações ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll(".cards, .about__content, form").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

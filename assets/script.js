const menuHamburger = document.querySelector(".menu-hamburger");
const navList = document.querySelector(".nav-list");

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  navList.classList.toggle("visible");
});

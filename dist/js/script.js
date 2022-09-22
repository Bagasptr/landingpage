const menubar = document.querySelector(".menu-bar");
const menunav = document.querySelector(".menu");

menubar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = Window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

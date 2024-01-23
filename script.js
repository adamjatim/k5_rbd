function navbarHamburger() {
  const navHamburger = document.getElementById("burger-navbar");
  const navbarMenu = document.getElementById("navbar-menu");
  navHamburger.classList.toggle("border-sky-400");
  navbarMenu.classList.toggle("hidden");
  navHamburger.classList.toggle("border-white");
}

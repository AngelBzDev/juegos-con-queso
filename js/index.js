document.querySelector("#btn__menu").addEventListener("click", () => {
  const navbarMenu = document.querySelector(".navbar__options");
  if (navbarMenu.classList.contains("hidden")) {
    navbarMenu.classList.replace("hidden", "flex");
  } else {
    navbarMenu.classList.replace("flex", "hidden");
  }
  navbarMenu.classList.toggle("animate__fadeInLeft");
});

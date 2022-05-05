document.querySelector("#btn__menu").addEventListener("click", () => {
  const navbarMenu = document.querySelector(".navbar__options");
  if (navbarMenu.classList.contains("hidden")) {
    navbarMenu.classList.remove("hidden");
    navbarMenu.classList.add("flex");
  } else {
    navbarMenu.classList.remove("flex");
    navbarMenu.classList.add("hidden");
  }
});

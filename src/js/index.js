document.querySelector("#btn__menu").addEventListener("click", () => {
  const navbarMenu = document.querySelector(".navbar__options");
  if (navbarMenu.classList.contains("hidden")) {
    navbarMenu.classList.replace("hidden", "flex");
  } else {
    navbarMenu.classList.replace("flex", "hidden");
  }
  /* navbarMenu.classList.toggle("animate__fadeInLeft"); */
});

//Swiper
const swiperContainer = document.querySelector(".swiper-wrapper");
const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const url = "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/02/08/620280c33764b.r_d.3246-2700-0.jpeg"

slides.forEach((slide) => {
  const slideDiv = document.createElement("div");
  slideDiv.classList.add("swiper-slide", "card__swiper");
  slideDiv.innerHTML = `<div class="card__img"></div>`;

  swiperContainer.appendChild(slideDiv);
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: false,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 20,
    }
  },
});



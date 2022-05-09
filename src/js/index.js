//Boton para abrir la navegacion
document.querySelector("#btn__menu").addEventListener("click", () => {
  const navbarMenu = document.querySelector(".navbar__options");
  if (navbarMenu.classList.contains("hidden")) {
    navbarMenu.classList.replace("hidden", "flex");
  } else {
    navbarMenu.classList.replace("flex", "hidden");
  }
});

//Swiper
const swiperContainer = document.querySelector(".swiper-wrapper");
const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const url =
  "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/02/08/620280c33764b.r_d.3246-2700-0.jpeg";

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
    },
  },
});

const getGames = async (size) => {
  try {
    const respuesta = await fetch(
      `https://api.rawg.io/api/games?key=48add53f7d224aae88ebe6826f55af90&page_size=${size}`,
      {
        method: "GET",
      }
    );
    const resultado = await respuesta.json();
    return resultado.results;
  } catch (err) {
    return err;
  }
};

console.log(await getGames());

//Tarjetas de juegos populares
const popularGamesContainer = document.querySelector(".popular__games");
let juegos;
if (popularGamesContainer.classList.contains("four")) {
  juegos = await getGames(4);
} else {
  juegos = await getGames(8);
}

juegos.forEach((juego, i) => {
  const card = document.createElement("div");
  card.innerHTML = `<div class="popular__game">
  <div class="popular__game-info">
    <img
      class="popular__game-img"
      src="${juego.background_image}"
      alt="${juego.slug}"
    />
    <div class="popular__game-desc">
      <h4>${juego.name}</h4>
      <p>${juego.genres[0].name}</p>
      <p>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </p>
    </div>
  </div>
  <p>MXN$1099</p>
</div>`;
  popularGamesContainer.appendChild(card);
});

//Api
/* 48add53f7d224aae88ebe6826f55af90 */

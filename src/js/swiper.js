import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const DESKTOP_BREAKPOINT = 1440;

let howSwiper = null;
let charactersSwiper = null;

function createHowSwiper() {
  if (howSwiper) return;

  const slider = document.querySelector('.how-swiper');

  if (!slider) return;

  howSwiper = new Swiper(slider, {
    modules: [Autoplay],

    slidesPerView: 1.2,
    spaceBetween: 16,

    loop: true,
    speed: 800,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

function createCharactersSwiper() {
  if (charactersSwiper) return;

  const slider = document.querySelector('.characters-swiper');

  if (!slider) return;

  charactersSwiper = new Swiper(slider, {
    modules: [Autoplay],

    slidesPerView: 1.2,
    spaceBetween: 16,

    loop: true,
    speed: 800,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

function destroyHowSwiper() {
  if (!howSwiper) return;

  howSwiper.destroy(true, true);
  howSwiper = null;
}

function destroyCharactersSwiper() {
  if (!charactersSwiper) return;

  charactersSwiper.destroy(true, true);
  charactersSwiper = null;
}

function updateSwipers() {
  const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

  if (isDesktop) {
    destroyHowSwiper();
    destroyCharactersSwiper();
    return;
  }

  createHowSwiper();
  createCharactersSwiper();
}

updateSwipers();

window.addEventListener('resize', updateSwipers);
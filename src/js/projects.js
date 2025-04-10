import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';

const proj_btn_next = document.querySelector('.proj-button-right');
const proj_btn_prev = document.querySelector('.proj-button-left');
const projSwiper = new Swiper('.proj-swiper', {
  direction: 'horizontal',
  simulateTouch: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Keyboard, Navigation],
  navigation: {
    nextEl: proj_btn_next,
    prevEl: proj_btn_prev,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  on: {
    reachEnd: () => {
      proj_btn_next.disabled = true;
    },
    reachBeginning: () => {
      proj_btn_prev.disabled = true;
    },
    fromEdge: () => {
      proj_btn_next.disabled = false;
      proj_btn_prev.disabled = false;
    },
  },
});

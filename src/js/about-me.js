import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const abme_accordion = new Accordion('.abme-accordion', {
    duration: 400,
    showMultiple: true,
    elementClass: 'abme-ac', //ac
    triggerClass: 'abme-ac-trigger', //ac-trigger
    panelClass: 'abme-ac-panel', //ac-panel
    activeClass: 'abme-ac-open', //is-active
  });
  abme_accordion.open(0);
});

const abmeSwiper = new Swiper('.abme-skills', {
  modules: [Keyboard, Navigation],
  containerModifierClass: 'abme-',
  slideActiveClass: 'abme-slide-active',
  loop: true,
  loopedSlides: 12,
  slidesPerView: 2,
  simulateTouch: true,
  touchRatio: 1,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.abme-nextskill',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

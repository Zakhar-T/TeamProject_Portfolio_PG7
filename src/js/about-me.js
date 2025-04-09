import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  // document.querySelectorAll('.accordion-header').forEach(header => {
  //   header.addEventListener('click', () => {
  //     const item = header.parentElement;
  //     item.classList.toggle('open');
  //   });
  // });

  const swiper = new Swiper('.aboutMe-swiper', {
    spaceBetween: 0,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.aboutMe-swiper-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      1440: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });

  swiper.on('slideChange', () => {
    document
      .querySelectorAll('.swiper-slide')
      .forEach(slide => slide.classList.remove('active'));
    swiper.slides[swiper.activeIndex].classList.add('active');
  });
});

const abme_accordion = new Accordion('.abme-accordion', {
  duration: 400,
  showMultiple: true,
  elementClass: 'abme-ac', //ac
  triggerClass: 'abme-ac-trigger', //ac-trigger
  panelClass: 'abme-ac-panel', //ac-panel
  activeClass: 'abme-ac-open', //is-active
});
abme_accordion.open(0);

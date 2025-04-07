import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });

  const aboutMe_btn_next = document.querySelector('.aboutMe-swiper-button-next');
  const swiper = new Swiper('.skills-slider', {
    spaceBetween: 0,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: aboutMe_btn_next,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      1440: {
        slidesPerView: 4,
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


import Swiper from 'swiper';
import 'swiper/css';
import { Navigation} from 'swiper/modules';

const rewiewers_list = [
  {
    name: 'Natalie',
    alt: 'natalia',
    img: './img/rewiews/natalia.png',
    rewiew:
      'Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations',
  },
  {
    name: 'Dmytro',
    alt: 'dmytro',
    img: './img/rewiews/dmytro.png',
    rewiew:
      'I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.',
  },
  {
    name: 'Anna',
    alt: 'anna',
    img: './img/rewiews/anna.png',
    rewiew:
      'The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!',
  },
  {
    name: 'Ivetta',
    alt: 'ivetta',
    img: './img/rewiews/ivetta.png',
    rewiew:
      'Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.',
  },
];

const rewiews = document.querySelector('.reviews-list');
const fragment = document.createDocumentFragment();

rewiewers_list.forEach(({ name, alt, img, rewiew }) => {
  const rewiewer_item = document.createElement('li');
  rewiewer_item.classList.add('reviews-item');
  rewiewer_item.classList.add('swiper-slide');
  rewiewer_item.innerHTML = `
    <img src="${img}" alt="${alt}" class="reviews-img">
    <h3 class="reviews-name">${name}</h3>
    <p class="reviews-text-content">${rewiew}</p>
  `;
  fragment.appendChild(rewiewer_item);
});

rewiews.appendChild(fragment);

const rev_btn_next = document.querySelector('.reviews-button-next');
const rev_btn_prev = document.querySelector('.reviews-button-prev');
const swiper = new Swiper('.review-swiper', {
  direction: 'horizontal',
  // loop: true,
  simulateTouch: true,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  modules: [Navigation],
    navigation: {
        nextEl: rev_btn_next,
        prevEl: rev_btn_prev,  
  },
  on: {
    reachEnd: () => {
      rev_btn_next.disabled = true;
    },
    reachBeginning: () => {
      rev_btn_prev.disabled = true;
    },
    fromEdge: () => {
      rev_btn_next.disabled = false;
      rev_btn_prev.disabled = false;
    }
    }
});

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

async function getData() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function generateReviews() {
  const rewiewers_list = getData();
  const rewiews = document.querySelector('.reviews-list');
  if (rewiewers_list.length === 0) {
    const errorReviewText = document.createElement('p');
    errorReviewText.classList.add('review-error-massage');
    errorReviewText.textContent = 'Reviews is Not Found';
    rewiews.appendChild(errorReviewText);
    const rect = errorReviewText.getBoundingClientRect();
    console.log(rect);
    return;
  }

  const fragment = document.createDocumentFragment();

  rewiewers_list.forEach(({ author, avatar_url, review }) => {
    const rewiewer_item = document.createElement('li');
    rewiewer_item.classList.add('reviews-item');
    rewiewer_item.classList.add('swiper-slide');
    rewiewer_item.innerHTML = `
    <img src="${avatar_url}" alt="${author} review" class="reviews-img">
    <h3 class="reviews-name">${author}</h3>
    <p class="reviews-text-content">${review}</p>
  `;
    fragment.appendChild(rewiewer_item);
  });

  rewiews.appendChild(fragment);

  const rev_btn_next = document.querySelector('.reviews-button-next');
  const rev_btn_prev = document.querySelector('.reviews-button-prev');
  const swiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
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
      },
    },
  });
  const reviews_card = document.querySelectorAll('.reviews-item');

  reviews_card.forEach(card => {
    card.addEventListener('mouseenter', event => {
      const rect = card.getBoundingClientRect();
      const cardClone = card.cloneNode(true);
      card.style.opacity = 0;
      cardClone.classList.add('card-clone');
      cardClone.classList.add('card-open');
      cardClone.style.position = 'absolute';
      cardClone.style.top = `${rect.top + window.scrollY}px`;
      cardClone.style.left = `${rect.left + window.scrollX}px`;
      cardClone.style.width = `${rect.width}px`;
      cardClone.style.maxHeight = 'max-content';
      cardClone.style.zIndex = '1000';
      cardClone.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      cardClone.style.backgroundColor = '#1c1d22';

      document.body.appendChild(cardClone);

      cardClone.addEventListener('mouseleave', () => {
        cardClone.remove();
        card.style.opacity = 1;
      });
    });
  });
}

generateReviews();

function handleScroll() {
  const errorReviewText = document.querySelector('.review-error-massage');
  if (!errorReviewText) return;

  const rect = errorReviewText.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    iziToast.error({
      title: 'Oops!',
      message: 'No reviews found for this section.',
      timeout: 5000,
      backgroundColor: '#2c2f33', 
      titleColor: '#FF6B6B', 
      messageColor: '#FFFFFF', 
      icon: 'fas fa-exclamation-circle', 
      iconColor: '#FF6B6B',
      position: 'topRight', 
      progressBarColor: '#FF6B6B', 
      transitionIn: 'fadeInDown', 
      transitionOut: 'fadeOutUp',
    });

    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

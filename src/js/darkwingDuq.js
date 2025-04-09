import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//   const faqItems = document.querySelectorAll('.faq-item');
//   faqItems.forEach(item => {
//     const question = item.querySelector('.faq-open');
//     question.addEventListener('click', () => {
//       faqItems.forEach(el => {
//         if (el !== item) {
//           el.classList.remove('active');
//           el.querySelector('.faq-answer').style.display = 'none';
//         }
//       });
//       const answer = item.querySelector('.faq-answer');
//       const isOpen = item.classList.contains('active');
//       if (isOpen) {
//         answer.style.display = 'none';
//         item.classList.remove('active');
//       } else {
//         answer.style.display = 'block';
//         item.classList.add('active');
//       }
//     });
//   });
// });
const faq_accordion = new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
});

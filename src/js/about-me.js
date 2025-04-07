document.addEventListener('DOMContentLoaded', () => {
  // Accordion
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("open");
    });
  });

  // Initialize Swiper for the skills slider
  const swiper = new Swiper('.skills-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // Highlight the active slide
  swiper.on('slideChange', () => {
    document.querySelectorAll('.swiper-slide').forEach(slide => slide.classList.remove('active'));
    swiper.slides[swiper.activeIndex].classList.add('active');
  });
});

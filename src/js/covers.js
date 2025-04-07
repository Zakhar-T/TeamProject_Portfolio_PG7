const section = document.querySelector('.covers');
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('onScreen');
      } else {
        entry.target.classList.remove('onScreen');
      }
    });
  },
  {
    root: null,
    rootMargin: '100px',
    threshold: 0,
  }
);
observer.observe(section);

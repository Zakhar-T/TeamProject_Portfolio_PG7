const rewiewers_list = [
  {
    name: 'Natalie',
    alt: 'natalia',
    img: '../img/rewiews/natalia.png',
    rewiew:
      'Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations',
  },
  {
    name: 'Dmytro',
    alt: 'dmytro',
    img: '../img/rewiews/dmytro.png',
    rewiew:
      'I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.',
  },
  {
    name: 'Anna',
    alt: 'anna',
    img: '../img/rewiews/anna.png',
    rewiew:
      'The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!',
  },
  {
    name: 'Ivetta',
    alt: 'ivetta',
    img: '../img/rewiews/ivetta.png',
    rewiew:
      'Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.',
  },
];

const rewiews = document.querySelector('.rewiews-list');
const fragment = document.createDocumentFragment();

rewiewers_list.forEach(({name, alt, img, rewiew}) => {
    const rewiewer_item = document.createElement('li');
    rewiewer_item.classList.add('rewiews-item');
    rewiewer_item.innerHTML = `
                <img src="${img}" alt="${alt}" class="rewiews-img">
                <h3 class="rewiews-name">${name}</h3>
                <p class="rewiews-text-content">${rewiew}</p>
  `;
    fragment.appendChild(rewiewer_item);
});

rewiews.appendChild(fragment);
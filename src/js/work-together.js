import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const body = document.body;
const form = document.querySelector('.work-together-form');


axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function postRequests(email, comment) {
    return await axios.post('/requests/', { email: email, comment: comment });
}

form.addEventListener('submit', submitForm);

function submitForm(evt) {
    evt.preventDefault();
    const form = evt.target;
    const { userEmail, userComments } = form.elements;
    postRequests(userEmail.value, userComments.value)
        .then(resp => {
            const instance = basicLightbox.create(` 
        <div id="modalW" class="backdrop">
            <div class="modal-window">
                <button class="modal-btn" type="button" aria-label="close-button">
                     <svg class="modal-btn-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                        <path stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7 7 21M7 7l14 14"/>
                    </svg>
                </button>
            <div class="modal-wrapper">
                <h3 class="modal-title">${resp.data.title}</h3>
                <p class="modal-text">${resp.data.message}</p>
            </div>
            </div>
        </div>`);
            instance.show();
            const modal = document.getElementById('modalW');
            const modal1 = modal.parentNode;
            body.classList.add('mobMenuOpen');

            body.classList.add('on-scroll');

            body.addEventListener('keydown', escClose);
            function escClose(evt) {
                if (evt.keyCode === 27) {
                    instance.close();
                    if (modal1.classList.contains('basicLightbox__placeholder')) {
                        body.classList.remove('mobMenuOpen');
                        body.removeEventListener('keydown', escClose);
                        body.classList.toggle('on-scroll');
                    }
                }
            }
            body.addEventListener('click', evt => {
                if (evt.target === modal) {
                    instance.close();
                    if (modal1.classList.contains('basicLightbox__placeholder')) {
                        body.classList.remove('mobMenuOpen');

                        body.classList.toggle('on-scroll');

                    }
                }
            });
            instance.element().querySelector('.modal-btn').onclick = () => {
                instance.close();
                if (modal1.classList.contains('basicLightbox__placeholder')) {
                    body.classList.remove('mobMenuOpen');

                    body.classList.toggle('on-scroll');
                }
            };
            userEmail.value = '';
            userComments.value = '';
        })
        .catch(err => {
            iziToast.error({
                message: `Unable to send your data. Please correct them and try again.`,
                position: 'topRight',
            });
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Error: Reviews not found';
            errorMessage.style.color = 'red';
            errorMessage.style.border = '1px solid #ed3b44';
            errorMessage.style.borderRadius = '15px';
            errorMessage.style.padding = '32px';
            reviewsList.innerHTML = '';
            reviewsList.appendChild(errorMessage);
        });
}

const emailBtn = document.querySelector('.email-js');
const phoneBtn = document.querySelector('.phone-js');

emailBtn.addEventListener('click', () => {
    window.location.href = 'mailto:lloydjefferson@gmail.com';
});

phoneBtn.addEventListener('click', () => {
    window.location.href = 'tel:+380111111111';
    console.log(window.location.href);
});
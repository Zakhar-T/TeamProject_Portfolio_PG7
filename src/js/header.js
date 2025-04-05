let isUserActive = 0;
const menuBtnOpn = document.getElementById('hdr-openmenu');
menuBtnOpn.addEventListener('click', onMenuOpenClick);

function onMenuOpenClick(evt) {
  logo.removeEventListener('mouseover', playAudio);
  logo.addEventListener('mouseover', playAudio);

  let menu;
  if (evt.target.tagName === 'SPAN') {
    menu = document.querySelector('.hdr-menu');
  } else {
    menu = document.querySelector('.mobile-menu');
    menu.addEventListener('click', onMenuCloseClick);
  }
  menu.classList.toggle('menu-visible');
}

function onMenuCloseClick(evt) {
  if (!evt.target.classList.contains('menu-visible')) {
    evt.currentTarget.classList.remove('menu-visible');
    evt.currentTarget.removeEventListener('click', onMenuCloseClick);
  }
}
// #region Nyan

const logo = document.querySelector('.hdr-nav-logo');
let nyanStopDelay;
let nyanStarted = false;

function playAudio() {
  logo.classList.add('js-logo');
  let audio = document.getElementById('nyanAudio');
  audio.play();
  if (!nyanStarted) {
    logo.addEventListener('mouseout', pauseAudio);
    logo.addEventListener('animationend', goNyan);
    nyanStarted = true;
  }
  clearInterval(nyanStopDelay);
}

function pauseAudio() {
  nyanStopDelay = setTimeout(() => {
    let audio = document.getElementById('nyanAudio');
    audio.pause();
    audio.currentTime = 0;
    logo.classList.remove('js-logo');
    logo.firstElementChild.style.animation = '';
    logo.firstElementChild.setAttribute('src', '/img/header/logo.jpg');
    logo.removeEventListener('mouseover', playAudio);
    logo.removeEventListener('mouseout', pauseAudio);
    logo.removeEventListener('animationend', goNyan);
    nyanStarted = false;
  }, 1000);
}
function goNyan() {
  logo.firstElementChild.setAttribute('src', '/img/header/uni.png');
  logo.firstElementChild.style.animation = 'nyan 400ms infinite linear';
}
// #endregion Nyan

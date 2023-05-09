let popup = document.querySelector('.popup');
let editBotton = document.querySelector('.profile__edit-button');
let closeBotton = document.querySelector('.popup__button-close');

function openPopup() {
  popup.classList.add('popup__opened');
}

editBotton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup__opened');
}

closeBotton.addEventListener('click', closePopup);

let userName = document.querySelector('.popup__name');
let userInfo = document.querySelector('.popup__info');

userInfo.value;
userInfo.value;

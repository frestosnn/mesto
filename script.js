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

let formElement = document.querySelector('.popup__form');

let userName = formElement.querySelector('.popup__user-name');
let userInfo = formElement.querySelector('.popup__user-info');

function handleFormSubmit(evt) {
  evt.preventDefault();

  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');

  profileName.textContent = userName.value;
  profileDescription.textContent = userInfo.value;

  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

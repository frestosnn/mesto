let popup = document.querySelector('.popup');
let editBotton = document.querySelector('.profile__edit-button');
let closeBotton = document.querySelector('.popup__button-close');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let formElement = document.querySelector('.popup__form');
let userName = formElement.querySelector('.popup__input_user-info_name');
let userInfo = formElement.querySelector('.popup__input_user-info_job');

function openPopup() {
  //функция открытия попапа
  userName.value = profileName.textContent; //при открытии попапа там уже находится до этого введенная информация
  userInfo.value = profileDescription.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  //функция закрытия попапа
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  //функция изменения данных профиля
  evt.preventDefault(); //в которой последним действием является закрытие попапа

  profileName.textContent = userName.value;
  profileDescription.textContent = userInfo.value;

  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); //слушатели событий

editBotton.addEventListener('click', openPopup);
closeBotton.addEventListener('click', closePopup);

import { Card } from './card.js';
import { FormValidator, validators } from './validate.js';

//массив откуда создаются новые карточки
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//объявляем переменные
const popupEdit = document.querySelector('.popup_add_edit');
const editBotton = document.querySelector('.profile__edit-button');
const closePopupButton = popupEdit.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formEdit = popupEdit.querySelector('.popup__form');
const userName = formEdit.querySelector('.popup__input_user-info_name');
const userInfo = formEdit.querySelector('.popup__input_user-info_job');

//функция при открытии попапа там уже находится до этого введенная информация
function valueInside() {
  userName.value = profileName.textContent;
  userInfo.value = profileDescription.textContent;
}

//функция удаления ошибок
const spanList = document.querySelectorAll('.popup__error');
function removeError() {
  spanList.forEach(function (el) {
    el.classList.remove('popup__error_visible'); //удаляем стили ошибки
    el.textContent = ''; //очищаем текст ошибки
  });
}

//функция удаления красных бордеров
const inputList = document.querySelectorAll('.popup__input');
function removeBorder() {
  inputList.forEach(function (el) {
    el.classList.remove('popup__input_type_error'); //из инпута удаляем класс ошибки, то есть красный бордер
  });
}

//функция инактивации кнопок
const buttonSaveList = document.querySelectorAll('.popup__button-save');
function disableButton() {
  buttonSaveList.forEach(function (el) {
    el.setAttribute('disabled', true); //добавить неактивный добавить атрибут
    el.classList.add('popup__button-save_disabled');
  });
}

//функция закрытия попапа по клавише Esc
function closeByEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//функция закрытия попапа по клику на оверлей
function closeByOverlay(event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//функция открытия попапа
export function openPopup(popupEl) {
  popupEl.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  popupEl.addEventListener('click', closeByOverlay);
}

//функция закрытия попапа
function closePopup(popupEl) {
  popupEl.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc); //удаляем слушатели событий
  popupEl.removeEventListener('click', closeByOverlay);
  removeError(); //удаляются ошибки
  removeBorder(); //и удаляются границы при закрытии попапов
  disableButton(); //кнопка неактивна
  formAddPhoto.reset(); //удаление всех введенных данных, введенных пользователем именно в форме добавления карточек
}

//функция изменения данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = userName.value;
  profileDescription.textContent = userInfo.value;

  closePopup(popupEdit);
}

//слушатель событий для отправки формы
formEdit.addEventListener('submit', handleFormSubmit);

//слушатель событий для кнопки изменения информации
const buttonSave = formEdit.querySelector('.popup__button-save');
editBotton.addEventListener('click', function () {
  openPopup(popupEdit);
  valueInside(); //функция, которая добавляет данные, введенные пользователем, обратно в инпут
  buttonSave.removeAttribute('disabled'); //при открытии попапа удаляются классы для кнопки сохранить
  buttonSave.classList.remove('popup__button-save_disabled');
});

closePopupButton.addEventListener('click', function () {
  closePopup(popupEdit);
});

///////////////////////////ПОПАП-ДОБАВЛЕНИЯ КАРТОЧЕК

const addButton = document.querySelector('.profile__add-button'); // кнопку добавления фотокарточек
const popupAddPhoto = document.querySelector('.popup_add_photo'); //попап добавления фотокарточек
const closeButtonAdd = document.querySelector('.popup__button-close_popup_edit'); //добавили кнопку закрытия попапа-редактирования

//слушатель событий для открытия попапа добавления фотокарточек
addButton.addEventListener('click', function () {
  openPopup(popupAddPhoto);
});

closeButtonAdd.addEventListener('click', function () {
  closePopup(popupAddPhoto);
});

const popupCloseButton = document.querySelector('.popup__button-close_popup_zoom'); //кнопка закрытия фотокарточек

//слушатель на закрытия попапа
popupCloseButton.addEventListener('click', function () {
  closePopup(popupOpenPhoto);
});

export const popupOpenPhoto = document.querySelector('.popup_add_big-photo'); //попап открытия фото

const placeName = document.querySelector('.popup__input_place-info_name'); //нашли формы ввода
const placeUrl = document.querySelector('.popup__input_place-info_url');
const formAddPhoto = document.querySelector('.popup__form_card_add'); //форма добавления фото
const photoSection = document.querySelector('.photo'); ///добавили секцию, куда добавлять фотографии

//сохранение данных, добавление карточек и закрытия попапа
formAddPhoto.addEventListener('submit', evt => {
  evt.preventDefault();
  const newCard = new Card(placeName.value, placeUrl.value, '#photo-template'); //добавили новую карточку как объект со значениями из инпутов в функцию создания карточек
  const cardAdd = newCard.generateCard();
  photoSection.prepend(cardAdd);

  closePopup(popupAddPhoto);
});

//добавляем карточки на страницу
initialCards.forEach(item => {
  //перебираем массив карточек и для каждого элемента создаем новый экземпляр класса Card
  const card = new Card(item.name, item.link, '#photo-template');
  const cardEl = card.generateCard();
  photoSection.prepend(cardEl);
});

//перебираем массив всех форм и для каждой формы создаем свой экземпляр класса FormValidator
const validationForms = document.querySelectorAll('.popup__form');
validationForms.forEach(item => {
  const form = new FormValidator(validators, item);
  //для каждой формы используем метод EnableValidation
  const checkedForm = form.enableValidation();
});

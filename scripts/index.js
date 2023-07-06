import { Card } from './Card.js';
import { FormValidator, validators } from './FormValidator.js';

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
const profileCloseButton = popupEdit.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formEdit = document.forms['formEdit'];
const userName = formEdit.querySelector('.popup__input_user-info_name');
const userInfo = formEdit.querySelector('.popup__input_user-info_job');

//создаем пустой объект с формами
const formValidators = {};

//функция при открытии попапа там уже находится до этого введенная информация
function fillProfileInputs() {
  userName.value = profileName.textContent;
  userInfo.value = profileDescription.textContent;
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
    closePopup(event.currentTarget);
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
}

//функция изменения данных профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = userName.value;
  profileDescription.textContent = userInfo.value;

  closePopup(popupEdit);
}

//слушатель событий для отправки формы
formEdit.addEventListener('submit', handleProfileFormSubmit);

//слушатель событий для кнопки изменения информации
const buttonSave = formEdit.querySelector('.popup__button-save');
editBotton.addEventListener('click', function () {
  openPopup(popupEdit);
  fillProfileInputs();
});

//функция закрытия попапов
const closeButtons = document.querySelectorAll('.popup__button-close');
closeButtons.forEach(button => {
  //ищем ближайщий к крестику попап
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//ПОПАП-ДОБАВЛЕНИЯ КАРТОЧЕК

//ищем нужные константы
const addButton = document.querySelector('.profile__add-button');
const popupAddPhoto = document.querySelector('.popup_add_photo');

const popupOpenPhoto = document.querySelector('.popup_add_big-photo');

//форма добавления фото
const placeName = document.querySelector('.popup__input_place-info_name');
const placeUrl = document.querySelector('.popup__input_place-info_url');
const formAddPhoto = document.forms['formAdd'];
const photoSection = document.querySelector('.photo'); ///добавили секцию, куда добавлять фотографии

//слушатель событий для открытия попапа добавления фотокарточек
addButton.addEventListener('click', function () {
  openPopup(popupAddPhoto);
  formValidators['formAdd'].resetValidation();
});

//сохранение данных, добавление карточек и закрытия попапа
formAddPhoto.addEventListener('submit', evt => {
  evt.preventDefault();
  const newCard = createCard({
    name: placeName.value,
    link: placeUrl.value
  });
  photoSection.prepend(newCard);

  closePopup(popupAddPhoto);
  formValidators['formAdd'].resetValidation();
});

//функция создания карточки с помощью класса
function createCard(item) {
  const newCard = new Card(item.name, item.link, '#photo-template', handleCardClick);
  const cardElement = newCard.generateCard();
  return cardElement;
}

//перебираем массив карточек и для каждого элемента создаем новый экземпляр класса Card
initialCards.forEach(item => {
  const card = createCard(item);
  photoSection.prepend(card);
});

//функция открытия больших фото
function handleCardClick(name, link) {
  //при клике на каждую картинку открывается попап
  openPopup(popupOpenPhoto);

  //поиск темплейт элементов в файле
  const bigPhoto = document.querySelector('.popup__img');
  const bigPhotoTitle = document.querySelector('.popup__photo-title');

  //присваиваем адрес и подпись картинкам
  bigPhoto.src = link;
  bigPhotoTitle.textContent = name;
  bigPhoto.alt = name;
}

//включаем валидацию
const enableValidation = validators => {
  //ищем все формы на странице
  const formList = Array.from(document.querySelectorAll(validators.formSelector));

  //для каждой формы создаем экземпляр
  formList.forEach(formElement => {
    const validator = new FormValidator(validators, formElement);

    //получаем имя формы
    const formName = formElement.getAttribute('name');

    //добавляем в объект ключ name а значением саму форму
    formValidators[formName] = validator;

    //запускаем валидацию для каждой формы
    validator.enableValidation();
  });
};

enableValidation(validators);

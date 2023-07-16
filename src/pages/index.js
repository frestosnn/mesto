import './index.css';

import { Card } from '../scripts/Card.js';
import { FormValidator, validators } from '../scripts/FormValidator.js';
import { Section } from '../scripts/Section.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { UserInfo } from '../scripts/UserInfo.js';
import {
  initialCards,
  editBotton,
  formEdit,
  userInfo,
  userName,
  formValidators,
  addButton,
  photoSection,
  bigPhoto,
  bigPhotoTitle
} from '../scripts/utils/constants.js';

//функция добавления данных из инпутов в профиль
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  //методом setUserInfo добавляем новые данные в разметку
  editForm.setUserInfo({ name: userName.value, job: userInfo.value });

  editInfoPopup.close();
}

//слушатель событий для кнопки редактирования информации о себе
editBotton.addEventListener('click', () => {
  editInfoPopup.open();
  formValidators['formEdit'].resetValidation();

  //получаем из разметки информацию о пользователе
  const profileData = editForm.getUserInfo();

  //вставляем информацию о пользователе в инпуты
  userName.value = profileData.name;
  userInfo.value = profileData.job;
});

//слушатель событий для открытия попапа добавления фотокарточек
addButton.addEventListener('click', function () {
  addPhotoPopup.open();
  formValidators['formAdd'].resetValidation();
});

//функция создания карточки с помощью класса Card
function createCard(item) {
  const newCard = new Card(item.name, item.link, '#photo-template', handleCardClick);
  const cardElement = newCard.generateCard();
  return cardElement;
}

//функция открытия больших фото
function handleCardClick(name, link) {
  //при клике на каждую картинку открывается попап
  bigPhotoPopup.open({ name: bigPhotoTitle, link: bigPhoto });
}

//отрисовываем карточки на странице
const cardList = new Section(
  {
    items: initialCards, //наш массив
    renderer: item => {
      //функция, которая создает карточки
      const card = createCard(item);

      //к нашему новому массиву применяем метод addItem, который добавляет карточки на страницу
      cardList.addItem(card);
    }
  },
  '.photo' //селектор контейнера
);

//запускаем метод renderItems
cardList.renderItems();

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

//создаем экземпляры классов для попапов
const addPhotoPopup = new PopupWithForm('.popup_add_photo', handleFormAdd);
const editInfoPopup = new PopupWithForm('.popup_add_edit', handleProfileFormSubmit);

//для попапа с открытием больших картинок
const bigPhotoPopup = new PopupWithImage('.popup_add_big-photo');

//функция-колбэк добавления новой карточки
function handleFormAdd(evt) {
  evt.preventDefault();

  //выбираем данные
  const values = addPhotoPopup._getInputValues();

  //передаем их функцию values
  const newCard = createCard(values);

  //вставляем в разметку
  photoSection.prepend(newCard);

  //закрываем попап
  addPhotoPopup.close();
}

//создание экземпляра класса UserInfo
const editForm = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__description'
});

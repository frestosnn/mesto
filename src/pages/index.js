import './index.css';

import { Card } from '../scripts/Card.js';
import { FormValidator, validators } from '../scripts/FormValidator.js';
import { Section } from '../scripts/Section.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { PopupWithConfirm } from '../scripts/PopupWithConfirm.js';
import {
  editBotton,
  userInfo,
  userName,
  formValidators,
  addButton,
  profileAvatar,
  avatarContainer,
  avatarImage,
  addAvatarIcon,
  buttonSaveNewPlace,
  buttonUpdateButton,
  buttonChangeAvatar
} from '../scripts/utils/constants.js';

import { Api } from '../scripts/Api.js';

//создаем экpемпляр класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-72',
  headers: {
    authorization: '2f3c4c0e-a26e-49e4-99f6-32f26b0c276a',
    'Content-Type': 'application/json'
  }
});

//функция добавления данных из инпутов в профиль
function handleProfileFormSubmit(values) {
  //методом setUserInfo добавляем новые данные в разметку
  profileSection.setUserInfo(values);

  editInfoPopup.close();

  renderLoading(true, 'Сохранение...', buttonUpdateButton);
  //сохраняем новую информацию на сервере
  api
    .editUserInfo(values)

    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      renderLoading(false, 'Сохранить', buttonUpdateButton);
    });
}

//слушатель событий для кнопки редактирования информации о себе
editBotton.addEventListener('click', () => {
  editInfoPopup.open();
  formValidators['formEdit'].resetValidation();

  //получаем из разметки информацию о пользователе
  const profileData = profileSection.getUserInfo();

  //вставляем информацию о пользователе в инпуты
  userName.value = profileData.name;
  userInfo.value = profileData.about;
});

//слушатель событий для открытия попапа добавления фотокарточек
addButton.addEventListener('click', function () {
  addPhotoPopup.open();
  formValidators['formAdd'].resetValidation();
});

//функция создания карточки с помощью класса Card
function createCard(item) {
  const newCard = new Card(
    item,
    '#photo-template',
    handleCardClick,
    () => {
      removePopup.open(newCard, newCard._id);
    },
    likeCard,
    dislikeCard
  );
  const cardElement = newCard.generateCard();

  //вызываем метод управления урной
  newCard.handleTrashBin();

  //проверяем лайкнуто ли фото
  newCard.checkLikeColor();

  return cardElement;
}

//функция открытия больших фото
function handleCardClick(name, link) {
  //при клике на каждую картинку открывается попап
  bigPhotoPopup.open(name, link);
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

//создание экземпляра класса UserInfo
const profileSection = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__description',
  selectorUserAvatar: '.profile__avatar'
});

//создаем экземпляры классов для попапов
const addPhotoPopup = new PopupWithForm(
  '.popup_add_photo',
  handleFormAddSubmit,
  '.popup__form_card_add'
);

//экземпляр класса попапа редактирования информации о себе
const editInfoPopup = new PopupWithForm('.popup_add_edit', handleProfileFormSubmit, '.popup__form');

//экземпляр класса попапа редактирования аватара
const avatarPopup = new PopupWithForm(
  '.popup_avatar-change',
  handleAvatarSubmit,
  '.popup__form_avatar_change'
);

//для попапа с открытием больших картинок
const bigPhotoPopup = new PopupWithImage('.popup_add_big-photo');

//экземпляр класса попапа с подтверждением удаления фото
const removePopup = new PopupWithConfirm(
  '.popup_remove-card',
  '.popup__button-save_popup_delete',
  handleDeleteCard
);

//функция-колбэк добавления новой карточки
function handleFormAddSubmit(values) {
  renderLoading(true, 'Создание...', buttonSaveNewPlace);
  //сохраняем новые карточки на сервер
  api
    .postNewCard(values)

    //создаем новую карточку и вставляем в разметку, это нужно для того, чтобы вернулся новый массив с id и likes
    .then(res => {
      cardList.addItem(createCard(res));
    })

    //закрываем попап
    .then(() => {
      addPhotoPopup.close();
    })
    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    })

    .finally(() => {
      renderLoading(false, 'Создать', buttonSaveNewPlace);
    });
}

//отрисовываем карточки на странице
const cardList = new Section(
  {
    renderer: item => {
      //функция, которая создает карточки
      const card = createCard(item);

      //к нашему новому массиву применяем метод addItem, который добавляет карточки на страницу
      cardList.addItem(card);
    }
  },
  '.photo' //селектор контейнера
);

//создание апи для рендера карточек
function generateCards() {
  api
    .getInitialCards() //получаем массив с карточками с сервера

    //рендер массива
    .then(res => {
      cardList.renderItems(res);
    })

    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    });
}

generateCards();

function uploadUserInfo() {
  api
    //получаем инфо о пользователе с сервера
    .getUserInfo()

    //вставляем в разметку данные с сервера
    .then(res => {
      profileSection.setUserInfo(res);
      profileSection.setUserAvatar(res);
    })

    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    });
}

uploadUserInfo();

//открытие попапа редактирования аватара
profileAvatar.addEventListener('click', () => {
  avatarPopup.open();
  formValidators['formAvatar'].resetValidation();
});

//функция-колбэк попапа редактирования аватара
function handleAvatarSubmit(values) {
  renderLoading(true, 'Сохранение...', buttonChangeAvatar);
  //добавление данных для патча
  api
    .changeAvatar(values)
    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      renderLoading(false, 'Сохранить', buttonChangeAvatar);
    });

  avatarPopup.close();
}

//удаление карточки
function handleDeleteCard(card, cardId) {
  api
    .deleteCard(cardId)

    .then(() => {
      card.deleteCard();
    })

    .then(() => {
      removePopup.close();
    })

    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    });
}

function likeCard(likeNumber, id, likeButton) {
  api
    .addLike(id)

    .then(res => {
      likeNumber.textContent = res.likes.length;
      likeButton.classList.add('photo__like_active');
    })

    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    });
}

function dislikeCard(likeNumber, id, likeButton) {
  api
    .deleteLike(id)

    .then(res => {
      likeNumber.textContent = res.likes.length;
      likeButton.classList.remove('photo__like_active');
    })

    .catch(err => {
      console.log(err); // выведем ошибку в консоль
    });
}

//наведение мыши для отображения карандаша

avatarContainer.addEventListener('mouseover', () => {
  avatarImage.style.opacity = '0.3';
  addAvatarIcon.style.opacity = '1';
});

avatarContainer.addEventListener('mouseout', () => {
  avatarImage.style.opacity = '1';
  addAvatarIcon.style.opacity = '0';
});

//функция для загрузки
function renderLoading(isLoading, text, button) {
  if (isLoading) {
    button.textContent = text;
  } else {
    button.textContent = text;
  }
}

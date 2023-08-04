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
export const editBotton = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const formEdit = document.forms['formEdit'];
export const userName = formEdit.querySelector('.popup__input_user-info_name');
export const userInfo = formEdit.querySelector('.popup__input_user-info_job');
export const addButton = document.querySelector('.profile__add-button');
export const profileAvatar = document.querySelector('.profile__avatar');
export const likeNumbers = document.querySelector('.photo__like-numbers');

//создаем пустой объект с формами
export const formValidators = {};

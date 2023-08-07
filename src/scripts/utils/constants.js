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
export const avatarContainer = document.querySelector('.profile__avatar-container');
export const avatarImage = document.querySelector('.profile__avatar');
export const addAvatarIcon = document.querySelector('.profile__add-avatar');

export const buttonSaveNewPlace = document.querySelector('.popup__button-save_add_newplace');
export const buttonUpdateButton = document.querySelector('.popup__button-save_update_user-info');
export const buttonChangeAvatar = document.querySelector('.popup__button-save_popup_avatar');

//создаем пустой объект с формами
export const formValidators = {};

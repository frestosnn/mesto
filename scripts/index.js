let popup = document.querySelector('.popup');
let editBotton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let userName = formElement.querySelector('.popup__input_user-info_name');
let userInfo = formElement.querySelector('.popup__input_user-info_job');

userName.value = profileName.textContent; //при открытии попапа там уже находится до этого введенная информация
userInfo.value = profileDescription.textContent;

function openPopup(popupEl) {
  //функция открытия попапа
  popupEl.classList.add('popup_opened');
}

function closePopup(popupEl) {
  //функция закрытия попапа
  popupEl.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  //функция изменения данных профиля
  evt.preventDefault(); //в которой последним действием является закрытие попапа

  profileName.textContent = userName.value;
  profileDescription.textContent = userInfo.value;

  closePopup(popup);
}

formElement.addEventListener('submit', handleFormSubmit); //слушатели событий для отправки формы и открытия/закрытия попапа

editBotton.addEventListener('click', function () {
  openPopup(popup);
});

closeButton.addEventListener('click', function () {
  closePopup(popup);
});

///////////////////////////ПОПАП-ДОБАВЛЕНИЯ КАРТОЧЕК

const addButton = document.querySelector('.profile__add-button'); //нашли кнопку добавления фотокарточек
const popupAddPhoto = document.querySelector('.popup_add_photo'); //добавили попап добавления фотокарточек

const closeButtonAdd = document.querySelector('.popup__button-close_popup_edit'); //добавили кнопку закрытия попапа-редактирования

addButton.addEventListener('click', function () {
  //слушатель событий для открытия попапа добавления фотокарточек
  openPopup(popupAddPhoto);
});
closeButtonAdd.addEventListener('click', function () {
  closePopup(popupAddPhoto);
});

//////////////////ДОБАВЛЕНИЕ КАРТОЧЕК

const formAddPhoto = document.querySelector('.popup__form_card_add'); //форма добавления фото
const templateContent = document.querySelector('#photo-template').content; // содержимое темплэйт-элемента
const card = templateContent.querySelector('.photo__item'); //нашли див-карточку
const photoSection = document.querySelector('.photo'); ///добавили секцию, куда добавлять фотографии

const initialCards = [
  ////массив откуда создаются новые карточки
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

initialCards.forEach(function (item) {
  const newCards = createCards(item);
  photoSection.prepend(newCards); //добавляем на страницу карточки из массива
});

function createCards(el) {
  const initCard = card.cloneNode(true);

  const initCardImg = initCard.querySelector('.photo__image'); //копируем элементы внутри: картинка, надпись, лайк, удаление
  const initCardTextArea = initCard.querySelector('.photo__text-area');
  const initCardTitle = initCard.querySelector('.photo__title');
  const initCardLike = initCard.querySelector('.photo__like');
  const initCardDelete = initCard.querySelector('.photo__delete');

  initCardTitle.textContent = el.name; //присваиваем значения для карточек
  initCardImg.src = el.link;

  const buttonLike = initCard.querySelector('.photo__like'); //находим кнопку Лайка на странице
  buttonLike.addEventListener('click', function () {
    //будет добавляться или удаляться класс при помощи слушателя событий
    buttonLike.classList.toggle('active');
  });

  const buttonDelete = initCard.querySelector('.photo__delete'); //ищем кнопки удалить
  buttonDelete.addEventListener('click', function () {
    //на каждую кнопку вешаем слушатель событий на клик
    const сard = buttonDelete.closest('.photo__item'); //используем метод closest, чтобы удалить именно родительский элемент, кликнутой кнопки
    сard.remove();
  });

  const imgBigTitle = document.querySelector('.title');
  const imgBig = document.querySelector('.img'); //поиск картинки и названия в попапе
  const popupOpenPhoto = document.querySelector('.popup_photo_open'); //находим попап открытия фото
  const popupCloseButton = document.querySelector('.popup__button-close_popup_add-photo'); //находим кнопку закрытия для фото-карточек
  initCardImg.addEventListener('click', function (event) {
    openPopup(popupOpenPhoto); //при клике на каждую картинку открывается попап
    imgBig.src = initCardImg.src;
    imgBigTitle.textContent = initCardTitle.textContent;
  });

  popupCloseButton.addEventListener('click', function () {
    closePopup(popupOpenPhoto); //при клике на закрыть - попап закрывается!
  });

  return initCard;
}

formAddPhoto.addEventListener('submit', function (evt) {
  //сохранение данных, добавление карточек и закрытия попапа
  evt.preventDefault();
  const placeName = document.querySelector('.popup__input_place-info_name'); //нашли формы ввода
  const placeUrl = document.querySelector('.popup__input_place-info_url');

  const newCard = createCards({ name: placeName.value, link: placeUrl.value }); //добавили новую карточку как объект со значениями из инпутов в функцию создания карточек
  photoSection.prepend(newCard);

  closePopup(popupAddPhoto);
});

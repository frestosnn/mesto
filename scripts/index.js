const popupEdit = document.querySelector('.popup_add_edit');
const editBotton = document.querySelector('.profile__edit-button');
const closePopupButton = popupEdit.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formEdit = popupEdit.querySelector('.popup__form');
const userName = formEdit.querySelector('.popup__input_user-info_name');
const userInfo = formEdit.querySelector('.popup__input_user-info_job');

function valueInside() {
  userName.value = profileName.textContent; //при открытии попапа там уже находится до этого введенная информация
  userInfo.value = profileDescription.textContent;
}

const spanList = document.querySelectorAll('.popup__error'); //находим все ошибки
function removeError() {
  //функция удаления ошибок
  spanList.forEach(function (el) {
    el.classList.remove('popup__error_visible'); //удаляем стили ошибки
    el.textContent = ''; //очищаем текст ошибки
  });
}

const inputList = document.querySelectorAll('.popup__input'); //находим все инпуты
function removeBorder() {
  //функция удаления красных бордеров
  inputList.forEach(function (el) {
    el.classList.remove('popup__input_type_error'); //из инпута удаляем класс ошибки, то есть красный бордер
  });
}

const buttonSaveList = document.querySelectorAll('.popup__button-save'); //находим все кнопки сохранить
function disableButton() {
  //функция инактивации кнопок
  buttonSaveList.forEach(function (el) {
    el.setAttribute('disabled', true); //добавить неактивный добавить атрибут
    el.classList.add('popup__button-save_disabled');
  });
}

function closeByEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closeByOverlay(event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popupEl) {
  //функция открытия попапа
  popupEl.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  popupEl.addEventListener('click', closeByOverlay);
}

function closePopup(popupEl) {
  //функция закрытия попапа
  popupEl.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  popupEl.removeEventListener('click', closeByOverlay);
  removeError(); //удаляются ошибки
  removeBorder(); //и удаляются границы при закрытии попапов
  disableButton(); //кнопка неактивна
  formAddPhoto.reset(); //удаление всех введенных данных, введенных пользователем именно в форме добавления карточек
}

function handleFormSubmit(evt) {
  //функция изменения данных профиля
  evt.preventDefault(); //в которой последним действием является закрытие попапа

  profileName.textContent = userName.value;
  profileDescription.textContent = userInfo.value;

  closePopup(popupEdit);
}

formEdit.addEventListener('submit', handleFormSubmit); //слушатели событий для отправки формы и открытия/закрытия попапа

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
  const newCard = createCard(item);
  photoSection.prepend(newCard); //добавляем на страницу карточки из массива
});

function createCard(el) {
  const initCard = card.cloneNode(true);

  const initCardImg = initCard.querySelector('.photo__image'); //копируем элементы внутри: картинка, надпись, лайк, удаление
  const initCardTextArea = initCard.querySelector('.photo__text-area');
  const initCardTitle = initCard.querySelector('.photo__title');
  const initCardLike = initCard.querySelector('.photo__like'); //находим кнопку Лайка на странице
  const initCardDelete = initCard.querySelector('.photo__delete'); //ищем кнопки удалить

  initCardTitle.textContent = el.name; //присваиваем значения для карточек
  initCardImg.src = el.link;
  initCardImg.alt = el.name;

  initCardLike.addEventListener('click', function () {
    //будет добавляться или удаляться класс при помощи слушателя событий
    initCardLike.classList.toggle('active');
  });

  initCardDelete.addEventListener('click', function () {
    //на каждую кнопку вешаем слушатель событий на клик
    const сard = initCardDelete.closest('.photo__item'); //используем метод closest, чтобы удалить именно родительский элемент, кликнутой кнопки
    сard.remove();
  });

  initCardImg.addEventListener('click', function (event) {
    openPopup(popupOpenPhoto); //при клике на каждую картинку открывается попап
    imgBig.src = initCardImg.src;
    imgBigTitle.textContent = initCardTitle.textContent;
    imgBig.alt = initCardTitle.textContent;
  });

  return initCard;
}

const imgBigTitle = document.querySelector('.popup__photo-title');
const imgBig = document.querySelector('.popup__img'); //поиск картинки и названия в попапе
const popupOpenPhoto = document.querySelector('.popup_add_big-photo'); //находим попап открытия фото
const popupCloseButton = document.querySelector('.popup__button-close_popup_zoom'); //находим кнопку закрытия для фото-карточек
popupCloseButton.addEventListener('click', function () {
  closePopup(popupOpenPhoto); //при клике на закрыть - попап закрывается!
});

const placeName = document.querySelector('.popup__input_place-info_name'); //нашли формы ввода
const placeUrl = document.querySelector('.popup__input_place-info_url');

formAddPhoto.addEventListener('submit', function (evt) {
  //сохранение данных, добавление карточек и закрытия попапа
  evt.preventDefault();
  const newCard = createCard({ name: placeName.value, link: placeUrl.value }); //добавили новую карточку как объект со значениями из инпутов в функцию создания карточек
  photoSection.prepend(newCard);

  closePopup(popupAddPhoto);
});

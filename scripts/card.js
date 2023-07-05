import { openPopup, popupOpenPhoto } from './index.js';

//создаем класс карточки
export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }
  //приватный методо получения разметки из html
  _getTemplate() {
    const cardEl = document
      .querySelector(this._templateSelector)
      .content.querySelector('.photo__item')
      .cloneNode(true);

    return cardEl;
  }
  //метод создания экземпляра карточки
  generateCard() {
    this._element = this._getTemplate();
    //вызов слушателей
    this._setEventListners();
    //экземпляру карточки присваиваем значения (через this, который обращается к объекту при вызове)
    this._element.querySelector('.photo__image').src = this._link;
    this._element.querySelector('.photo__title').textContent = this._name;
    this._element.querySelector('.photo__image').alt = this._name;

    return this._element;
  }
  //метод, который присваивает слушатели событий в экземпляре карточки
  _setEventListners() {
    this._element.querySelector('.photo__like').addEventListener('click', () => {
      this._handlePhotoLike();
    });

    this._element.querySelector('.photo__delete').addEventListener('click', () => {
      this._handlePhotoDelete();
    });

    this._element.querySelector('.photo__image').addEventListener('click', () => {
      this._handleBigPhoto();
    });
  }
  //метод который лайкает экзепляр карточки по клику
  _handlePhotoLike() {
    this._element.querySelector('.photo__like').classList.toggle('active');
  }
  //метод который удаляет экзепляр карточки по клику
  _handlePhotoDelete() {
    const сard = this._element.querySelector('.photo__delete').closest('.photo__item'); //используем метод closest, чтобы удалить именно родительский элемент, кликнутой кнопки
    сard.remove();
  }
  //метод открытия попапов экземплятор фотокарточек
  _handleBigPhoto() {
    openPopup(popupOpenPhoto); //при клике на каждую картинку открывается попап
    document.querySelector('.popup__img').src = this._element.querySelector('.photo__image').src;
    document.querySelector('.popup__photo-title').textContent =
      this._element.querySelector('.photo__title').textContent;
    document.querySelector('.popup__img').alt =
      this._element.querySelector('.photo__title').textContent;
  }
}

//создаем класс карточки
export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  //приватный метод получения разметки из html
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

    //объявление искомых переменных
    this._cardImage = this._element.querySelector('.photo__image');
    this._photoTitle = this._element.querySelector('.photo__title');

    //вызов слушателей
    this._setEventListners();

    //экземпляру карточки присваиваем значения (через this, который обращается к объекту при вызове)
    this._cardImage.src = this._link;
    this._photoTitle.textContent = this._name;
    this._cardImage.alt = this._name;

    return this._element;
  }

  //метод который лайкает экзепляр карточки по клику
  _handlePhotoLike() {
    this._likeButton.classList.toggle('active');
  }
  //метод который удаляет экзепляр карточки по клику
  _handlePhotoDelete() {
    this._element.remove();
  }

  //метод, который присваивает слушатели событий в экземпляре карточки
  _setEventListners() {
    //ищем все нужные элементы
    this._likeButton = this._element.querySelector('.photo__like');
    this._deleteButton = this._element.querySelector('.photo__delete');

    this._likeButton.addEventListener('click', () => {
      this._handlePhotoLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handlePhotoDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

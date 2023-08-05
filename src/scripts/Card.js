//создаем класс карточки
export class Card {
  constructor(data, templateSelector, handleCardClick, openDeletePopup) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this.openDeletePopup = openDeletePopup;
    this._id = data._id;
    this._ownerId = data.owner._id;
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
    this._likesNumber = this._element.querySelector('.photo__like-numbers');

    //вызов слушателей
    this._setEventListners();

    //вызываем метод
    this._handleTrashBin();

    //экземпляру карточки присваиваем значения (через this, который обращается к объекту при вызове)
    this._cardImage.src = this._link;
    this._photoTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._likesNumber.textContent = this._likes.length;

    return this._element;
  }

  //метод скрывающий урны на карточках
  _handleTrashBin() {
    if (this._id !== this._ownerId) {
      this._deleteButton.classList.add('photo__delete_inactive');
    }
  }

  //метод который лайкает экзепляр карточки по клику
  _handlePhotoLike() {
    this._likeButton.classList.toggle('active');
  }

  //метод, который присваивает слушатели событий в экземпляре карточки
  _setEventListners() {
    //ищем все нужные элементы
    this._likeButton = this._element.querySelector('.photo__like');
    this._deleteButton = this._element.querySelector('.photo__delete');
    /*let counter = 0; */

    /*//ставим лайки
    this._likeButton.addEventListener('click', () => {
      counter = counter + 1;
      this._likesNumber.textContent = this._likes.length + counter;
      if (counter === 2) {
        counter -= 2;
        this._likesNumber.textContent = this._likes.length - counter;
      }

      this._handlePhotoLike();
    }); */

    //открытие попапа при клике на кнопку удаления
    this._deleteButton.addEventListener('click', () => {
      this.openDeletePopup();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

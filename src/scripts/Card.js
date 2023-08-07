//создаем класс карточки
export class Card {
  constructor(data, templateSelector, handleCardClick, openDeletePopup, likeCard, dislikeCard) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this.openDeletePopup = openDeletePopup;
    this._id = data._id;
    this._ownerId = data.owner._id;

    this._myId = '1507d79db7819dd90a9a1caf';

    this.likeCard = likeCard;
    this.dislikeCard = dislikeCard;
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
    this.likesNumber = this._element.querySelector('.photo__like-numbers');

    //вызов слушателей
    this._setEventListners();

    //экземпляру карточки присваиваем значения (через this, который обращается к объекту при вызове)
    this._cardImage.src = this._link;
    this._photoTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this.likesNumber.textContent = this._likes.length;

    return this._element;
  }

  //метод удаления карточки
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  //метод скрывающий урны на карточках
  handleTrashBin() {
    if (this._ownerId !== this._myId) {
      this._deleteButton.classList.add('photo__delete_inactive');
    }
  }

  //проверка состояния лайка
  _checkLikes() {
    if (
      this._likes.some(item => {
        return item._id === this._myId;
      })
    ) {
      this.dislikeCard(this.likesNumber, this._id, this.likeButton);
    } else {
      this.likeCard(this.likesNumber, this._id, this.likeButton);
    }
  }

  //проверяем состояние кнопки лайка при загрузке страницы
  checkLikeColor() {
    if (
      this._likes.some(item => {
        return item._id === this._myId;
      })
    ) {
      this.likeButton.classList.add('photo__like_active');
    } else {
      this.likeButton.classList.remove('photo__like_active');
    }
  }

  //метод, который присваивает слушатели событий в экземпляре карточки
  _setEventListners() {
    //ищем все нужные элементы
    this.likeButton = this._element.querySelector('.photo__like');
    this._deleteButton = this._element.querySelector('.photo__delete');

    //ставим лайки
    this.likeButton.addEventListener('click', () => {
      this._checkLikes();
    });

    //открытие попапа при клике на кнопку удаления
    this._deleteButton.addEventListener('click', () => {
      this.openDeletePopup();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

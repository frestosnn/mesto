export class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);

    this.closeButton = this._popup.querySelector('.popup__button-close');
  }

  open() {
    this._popup.classList.add('popup_opened');

    //устанавливаем слушатели событий
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');

    //удаляем слушатели событий
    this._popup.removeEventListener('click', this._handleOverlayClose);
    document.removeEventListener('keydown', this._handleEscClose);
    this.closeButton.removeEventListener('click', this.close);
  }

  //метод для закрытия по кнопке Esc
  _handleEscClose = evt => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  //метод для закрытия по клику на оверлей
  _handleOverlayClose = evt => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  setEventListeners() {
    //добавили слушатель на событие нажатии клавиши Esc и оверлею
    this._popup.addEventListener('click', this._handleOverlayClose);
    document.addEventListener('keydown', this._handleEscClose);

    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}

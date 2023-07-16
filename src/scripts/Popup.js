export class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
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
  }

  //метод для закрытия по кнопке Esc
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close(this._popup);
    }
  }

  //метод для закрытия по клику на оверлей
  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close(this._popup);
    }
  }

  setEventListeners() {
    //добавили слушатель на событие нажатии клавиши Esc и оверлею
    this._popup.addEventListener('click', this._handleOverlayClose);
    document.addEventListener('keydown', this._handleEscClose);

    this.closeButtons = Array.from(document.querySelectorAll('.popup__button-close'));

    //функция закрытия попапов при клике на кнопку
    this.closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.close(this._popup);
      });
    });
  }
}

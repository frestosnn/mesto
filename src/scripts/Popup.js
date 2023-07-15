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
    this._popup.removeEventListener('click', () => {
      this.setEventListeners();
    });
    document.removeEventListener('keydown', () => {
      this.setEventListeners();
    });
  }

  //метод для закрытия по кнопке Esc
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close(this._popup);
    }
  }

  setEventListeners() {
    //функция закрытия при клике на оверлей

    this._popup.addEventListener('click', evt => {
      //если клик по оверлею (evt.currentTarget это оверлей)
      if (evt.target === evt.currentTarget) {
        this.close(this._popup);
      }
    });

    //добавили слушатель на событие нажатии клавиши Esc
    document.addEventListener('keydown', event => {
      this._handleEscClose(event);
    });

    this.closeButtons = Array.from(document.querySelectorAll('.popup__button-close'));

    //функция закрытия попапов при клике на кнопку
    this.closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.close(this._popup);
      });
    });
  }
}

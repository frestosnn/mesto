import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, handleForm) {
    //наследуем от родителя
    super(selector);

    //функция коллбек-сабмита формы
    this.handleForm = handleForm;

    //данные из инпутов
    this.placeName = document.querySelector('.popup__input_place-info_name');
    this.placeUrl = document.querySelector('.popup__input_place-info_url');
  }

  //собираем данные, которые ввел пользователь
  _getInputValues() {
    const valuesUser = {
      name: this.placeName.value,
      link: this.placeUrl.value
    };

    return valuesUser;
  }

  setEventListeners() {
    //вызываем родительский метод
    super.setEventListeners();

    //добавляем обработчик события отправки формы
    this._popup.addEventListener('submit', evt => {
      this.handleForm(evt);
    });
  }
}

import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, handleForm, formSelector) {
    //наследуем от родителя
    super(selector);

    //функция коллбек-сабмита формы
    this.handleForm = handleForm;

    //ищем форму в попапе
    this._form = this._popup.querySelector(formSelector);
  }

  //собираем данные, которые ввел пользователь
  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');

    //создаем пустой массив
    this._formValues = {};
    //отпределяем ключи и значения массива
    this._inputList.forEach(input => (this._formValues[input.name] = input.value));

    return this._formValues;
  }

  setEventListeners() {
    //вызываем родительский метод
    super.setEventListeners();

    //добавляем обработчик события отправки формы
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();

      this.handleForm(this._getInputValues());
    });
  }
}

export class FormValidator {
  constructor(validators, formEl) {
    this.validators = validators;
    this.formEl = formEl;

    //находим кнопку сохранить в проверяемой форме
    this.buttonEl = this.formEl.querySelector(this.validators.submitButtonSelector);

    //находим все инпуты в проверяемой форме
    this.inputList = Array.from(this.formEl.querySelectorAll(this.validators.inputSelector));
  }

  //функция добавления ошибки в инпут
  _showInputError(inputEl, errorMessage) {
    const errorElement = this.formEl.querySelector(`.${inputEl.id}-error`); //ищем место, где будет текст ошибки
    inputEl.classList.add(this.validators.inputErrorClass); //добавляем инпуту стили, то есть красный бордер
    errorElement.textContent = errorMessage; //текст ошибки = встренному тексту ошибок JS
    errorElement.classList.add(this.validators.errorClass); //добавляем ему стили
  }

  //функция скрывания ошибки
  _hideInputError(inputEl) {
    const errorElement = this.formEl.querySelector(`.${inputEl.id}-error`); //ищем место в HTML где будет текст ошибки
    inputEl.classList.remove(this.validators.inputErrorClass); //из инпута удаляем класс ошибки, то есть красный бордер
    errorElement.classList.remove(this.validators.errorClass); //удаляем стили ошибки
    errorElement.textContent = ''; //очищаем текст ошибки
  }

  //функция для проверки корректности инпутов
  _setEventListeners() {
    this.inputList.forEach(inputEl => {
      //для каждого инпута добавляем слушатель
      inputEl.addEventListener('input', () => {
        //функция isValid проверяем валидный ли код в каждом конкретном инпуте (то есть, для всех инпутов по очереди) в одной форме
        this._isValid(inputEl);

        //вызываем функцию переключения состояния кнопки, в которой лежит функция проверки валидны ли все инпуты одновременно
        this._toggleButtonState();
      });
    });
  }

  //функция проверяющая валидность данных
  _isValid(inputEl) {
    //если в инпуте в объекте validity ключ valid === false
    if (!inputEl.validity.valid) {
      //то показываем ошибку в этом инпуте
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      //если valid === true, то спрятать ошибку в этом инпуте
      this._hideInputError(inputEl);
    }
  }

  //проверка всех инпутов на валидность
  _hasInvalidInput(inputList) {
    return inputList.some(function (inputEl) {
      //проходим по массиву методом some, он возвращает true если поля прошли валидацию
      return !inputEl.validity.valid; //если не прошло, вернуть false
    });
  }

  //метод удаления ошибок и управления кнопкой
  resetValidation() {
    this._toggleButtonState();
    this.inputList.forEach(inputEl => {
      this._hideInputError(inputEl);
    });
  }

  //функция переключения состояния кнопки
  _toggleButtonState() {
    //если проверка инпутов возвращает false
    if (this._hasInvalidInput(this.inputList)) {
      //добавить неактивный класс и добавить атрибут
      this.buttonEl.setAttribute('disabled', true);
      this.buttonEl.classList.add(this.validators.inactiveButtonClass);
    } else {
      //если все инпуты true - удалить атрибут и класс
      this.buttonEl.removeAttribute('disabled');
      this.buttonEl.classList.remove(this.validators.inactiveButtonClass);
    }
  }

  //функция включения валидации
  enableValidation() {
    this._setEventListeners();
  }
}

export const validators = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

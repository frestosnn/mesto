function showInputError(formEl, inputEl, errorMessage) {
  //функция добавления ошибки, принимает конкретную форму и инпут в этой форме, а так же текст ошибки (это объект в JS)
  const errorElement = formEl.querySelector(`.${inputEl.id}-error`); //ищем место, где будет текст ошибки
  inputEl.classList.add('popup__input_type_error'); //добавляем инпуту стили, то есть красный бордер
  errorElement.textContent = errorMessage; //текст ошибки = встренному тексту ошибок JS
  errorElement.classList.add('popup__error_visible'); //добавляем ему стили
}

function hideInputError(formEl, inputEl) {
  //функция прячущая ошибку, принимает конкретную форму и инпут в этой форме
  const errorElement = formEl.querySelector(`.${inputEl.id}-error`); //ищем место в HTML где будет текст ошибки
  inputEl.classList.remove('popup__input_type_error'); //из инпута удаляем класс ошибки, то есть красный бордер
  errorElement.classList.remove('popup__error_visible'); //удаляем стили ошибки
  errorElement.textContent = ''; //очищаем текст ошибки
}

function isValid(formEl, inputEl) {
  //функция проверяющая валидность данных
  if (!inputEl.validity.valid) {
    //если в инпуте в объекте validity ключ valid === false
    showInputError(formEl, inputEl, inputEl.validationMessage); //то вызываем функцию показать ошибку в конкретной форме в этом инпуте
  } else {
    //если valid === true, то спрятать ошибку в конкретной форме в этом инпуте
    hideInputError(formEl, inputEl);
  }
}

//эти две функции работают так: перебираем все формы на странице и для каждой формы по очереди вызывается функция setEventListners. Эта функция в свою очередь перебирает в одной форме все инпуты (то есть, в конкретной форме1 перебирает её инпуты например инпут1 инпут2 инпут3 инпут4) и проверяет валидность данных инпутов. Но из-за того, что enableValidation ищет все формы на странице и применяет метод forEach, то далее после проверки формы1, идет проверка формы2 и т.д.. И для формы2 весь цикл повторяется(то есть, уже в форме2 ищутся её конкретные инпуты - инпут1 инпут2 инпут3 с помощью функции setEventListners)

function setEventListeners(formEl) {
  //функция для проверки корректности инпутов
  const inputList = Array.from(formEl.querySelectorAll('.popup__input')); //находим все инпуты в определенной форме
  const buttonEl = formEl.querySelector('.popup__button-save'); //нашли кнопку сохранить именно в конкретной форме

  toggleButtonState(inputList, buttonEl); //сразу вызываем функцию, не дожидаясь когда пользователь введет что-то, а значит кнопка при первом открытии попапа будет не валидной

  inputList.forEach(function (inputEl) {
    //для каждого инпута добавляем слушатель
    inputEl.addEventListener('input', () => {
      //функция isValid проверяем валидный ли код в каждом конкретном инпуте (то есть, для всех инпутов по очереди) в одной форме
      isValid(formEl, inputEl);

      toggleButtonState(inputList, buttonEl); //вызываем функцию переключения состояния кнопки, в которой лежит функция проверки валидны ли все инпуты одновременно
    });
  });
}

function enableValidation() {
  //функция собирающая со строницы все формы
  const formList = Array.from(document.querySelectorAll('.popup__form')); //ищем все формы и делаем их массивом
  formList.forEach(function (formEl) {
    //для каждой формы вызываем функцию setEventListners
    setEventListeners(formEl);
  });
}

function hasInvalidInput(inputList) {
  //проверка всех инпутов на валидность
  //принимает массив полей ввода
  return inputList.some(function (inputEl) {
    //проходим по массиву методом some, он возвращает true если поля прошли валидацию
    return !inputEl.validity.valid; //если не прошло, вернуть false
  });
}

function toggleButtonState(inputList, buttonEl) {
  //приниамает массив полей ввода и кнопку сохранить
  if (hasInvalidInput(inputList)) {
    //если проверка инпутов возвращает false
    buttonEl.setAttribute('disabled', true); //добавить неактивный добавить атрибут
    buttonEl.classList.add('popup__button-save_disabled');
  } else {
    buttonEl.removeAttribute('disabled'); //если все инпуты true - удалить атрибут
    buttonEl.classList.remove('popup__button-save_disabled');
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: '.popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
